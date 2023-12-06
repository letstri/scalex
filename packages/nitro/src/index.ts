import type { IncomingMessage, ServerResponse } from 'http';
import { setCookie, getCookie, getQuery } from 'h3';
import type { NitroApp } from 'nitropack';
import { createProvider } from 'nixle';

declare global {
  namespace Nixle {
    interface Provider extends NitroApp {}
    interface Request extends IncomingMessage {}
    interface Response extends ServerResponse<IncomingMessage> {}
  }
}

export const nitroProvider = createProvider((app) => {
  return {
    app,
    createRoute: (method, path, handler) =>
      app.router[method](path, (event) =>
        handler({
          request: event.node.req,
          response: event.node.res,
          params: event.context.params || {},
          query: getQuery(event),
          setStatusCode: (code) => (event.node.res.statusCode = code),
          setHeader: (key, value) => event.headers.set(key, value),
          getHeader: (key) => event.headers.get(key),
          setCookie: (name, value, options) => {
            const sameSiteMap = new Map([
              ['Strict', 'strict' as const],
              ['Lax', 'lax' as const],
              ['None', 'none' as const],
            ]);

            return setCookie(event, name, value, {
              ...options,
              sameSite: sameSiteMap.get(options?.sameSite || 'Strict') || 'strict',
            });
          },
          getCookie: (name) => getCookie(event, name) || null,
        }),
      ),
  };
});
