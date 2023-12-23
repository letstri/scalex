import type { extendRouterContext } from '../router/createRouter';
import type { extendServiceContext } from '../service/createService';
import type { log } from '../logger';
import type { Provider } from '..';
interface PluginOptions {
    provider: Provider;
    log: typeof log;
    extendRouterContext: typeof extendRouterContext;
    extendServiceContext: typeof extendServiceContext;
}
type PluginFunction = (options: PluginOptions) => void;
export interface Plugin {
    name: string;
    plugin: PluginFunction;
}
export declare const createPlugin: (name: string, plugin: PluginFunction) => Plugin;
export {};
