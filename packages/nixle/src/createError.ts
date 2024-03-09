import dayjs from 'dayjs';
import { colorize } from 'consola/utils';
import { log } from './logger';
import { isPrimitive, exclude } from './utils/helpers';
import { hooks } from './hooks';
import { StatusCode } from '.';

const renderer: any = {
  syntax: {
    string: (...m: string[]) => colorize('green', m.join('')),
    punctuator: (...m: string[]) => colorize('gray', m.join('')),
    keyword: (...m: string[]) => colorize('cyan', m.join('')),
    number: (...m: string[]) => colorize('magenta', m.join('')),
    regex: (...m: string[]) => colorize('magenta', m.join('')),
    comment: (...m: string[]) => colorize('gray', colorize('bold', m.join(''))),
    invalid: (...m: string[]) => colorize('inverse', m.join('')),
  },

  codeFrame: (v: any) => v.slice(1),

  codeLine(num: string, base: string, src: string, isLast: boolean) {
    let prefix = base ? ' > ' : '   ';
    let lineNum = prefix + colorize('dim', num) + ' ';

    if (base) lineNum = colorize('bgRed', lineNum);

    let line = lineNum + colorize('dim', '| ') + src.slice(0, 300);

    if (!isLast) line += '\n';

    return line;
  },

  stackLine(name: string, location: string, isLast: boolean) {
    let line =
      `   ${colorize('dim', 'at')} ` +
      name +
      ' (' +
      colorize('blueBright', colorize('underline', location)) +
      ')';

    if (!isLast) line += '\n';

    return line;
  },

  stack(stack: string) {
    return '\n\n' + stack;
  },
};

export interface ErrorOptions<D = any> {
  /**
   * @example User with id 1 not found
   */
  message: string;
  /**
   * @default 400 Bad Request
   *
   * @example StatusCode.BAD_REQUEST
   */
  statusCode?: number;
  /**
   * @example user_not_found
   */
  code?: string | number;
  /**
   * @example { id: 1 }
   */
  details?: D;
}

export class NixleError<D = any> extends Error {
  constructor({ statusCode, message, details, code }: ErrorOptions<D>) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = 'NixleError';
    this.statusCode = statusCode || StatusCode.BAD_REQUEST;
    this.message = message;
    this.details = details;
    this.code = code;
  }

  time = dayjs().format();
  statusCode: StatusCode;
  message = 'Internal Server Error';
  details?: D;
  code?: string | number;
}

const formatErrorStack = (stack: string) => {
  // TODO: add formatter for stack
  return stack;
};

export function createError<D>(options: ErrorOptions<D>): NixleError<D>;
export function createError<D = never>(message: string, statusCode?: StatusCode): NixleError<D>;

export function createError<D>(
  optionsOrMessage: string | ErrorOptions<D>,
  statusCode?: StatusCode,
): NixleError<D> {
  const message =
    typeof optionsOrMessage === 'string' ? optionsOrMessage : optionsOrMessage.message;

  return new NixleError<D>({
    message,
    statusCode:
      typeof optionsOrMessage === 'string'
        ? statusCode || StatusCode.BAD_REQUEST
        : optionsOrMessage.statusCode || StatusCode.BAD_REQUEST,
    code: typeof optionsOrMessage === 'string' ? undefined : optionsOrMessage.code,
    details:
      typeof optionsOrMessage === 'string' ? ({} as D) : optionsOrMessage.details || ({} as D),
  });
}

export const isNixleError = (error: any): error is NixleError => {
  return error instanceof NixleError;
};

export const logError = async (error: any, _log: typeof log) => {
  let message = '';

  if (isNixleError(error) || error instanceof Error) {
    message = error.message;
  } else if (isPrimitive(error)) {
    message = error;
  } else {
    message = `${error.constructor.name} ${JSON.stringify(error)}`;
  }

  const _details = JSON.stringify((error as NixleError)?.details, null, 2);
  const details = !!_details && Object.keys(_details).length && _details !== '{}' && _details;
  const params = [colorize('red', message), details && colorize('red', details)];

  if (error && (!error.statusCode || error.statusCode >= StatusCode.INTERNAL_SERVER_ERROR)) {
    if (error instanceof Error) {
      const { stack } = error;

      if (stack) {
        params.push('\n');
        params.push(formatErrorStack(stack));
      }
    }

    _log.fatal(...params.filter(Boolean));
  } else {
    _log.error(...params.filter(Boolean));
  }

  await hooks.callHook('error', error);
};

export const transformErrorToResponse = (error: any, statusCode: StatusCode) => {
  const defaultTime = dayjs().format();
  const isPrimitiveError = isPrimitive(error);

  const json: Omit<Pick<NixleError, keyof NixleError>, 'name'> = {
    statusCode,
    message: (isPrimitiveError && error) || error.message || 'Internal Server Error',
    time: (isPrimitiveError && defaultTime) || error.time || defaultTime,
    details: (isPrimitiveError && {}) || error.details || {},
    code: (isPrimitiveError && undefined) || error.code,
  };

  const _error = JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error)));

  json.details = {
    ...json.details,
    ...exclude(isPrimitive(_error) ? {} : _error, [
      'message',
      'name',
      'stack',
      'statusCode',
      'time',
      'details',
      'code',
    ]),
  };

  return json;
};
