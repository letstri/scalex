import type { ConsolaOptions } from 'consola';
import type { Module } from './modules/createModule';
import type { Provider } from './provider/createProvider';
import type { Plugin } from './plugins/createPlugin';
export interface AppOptions<Server> {
    provider: Provider<Server>;
    modules: Module[];
    plugins?: Plugin<Server>[];
    logger?: Partial<ConsolaOptions>;
}
export type NixleApp<Server> = ReturnType<typeof createApp<Server>>;
export declare const createApp: <Server = unknown>(options: AppOptions<Server>) => {
    app: Server;
    events: {
        on: {
            <Key extends keyof {
                request: import("./provider/RequestHandler").RequestHandlerParams;
                response: any;
                error: any;
            }>(type: Key, handler: import("mitt").Handler<{
                request: import("./provider/RequestHandler").RequestHandlerParams;
                response: any;
                error: any;
            }[Key]>): void;
            (type: "*", handler: import("mitt").WildcardHandler<{
                request: import("./provider/RequestHandler").RequestHandlerParams;
                response: any;
                error: any;
            }>): void;
        };
        emit: {
            <Key_1 extends keyof {
                request: import("./provider/RequestHandler").RequestHandlerParams;
                response: any;
                error: any;
            }>(type: Key_1, event: {
                request: import("./provider/RequestHandler").RequestHandlerParams;
                response: any;
                error: any;
            }[Key_1]): void;
            <Key_2 extends keyof {
                request: import("./provider/RequestHandler").RequestHandlerParams;
                response: any;
                error: any;
            }>(type: undefined extends {
                request: import("./provider/RequestHandler").RequestHandlerParams;
                response: any;
                error: any;
            }[Key_2] ? Key_2 : never): void;
        };
    };
    createRoute: (method: "options" | "get" | "post" | "put" | "delete" | "patch" | "head", path: string, handler: import("./provider/RequestHandler").RequestHandler) => void;
};
