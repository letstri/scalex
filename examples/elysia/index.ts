import { Elysia } from 'elysia';
import { createApp, createModule, createRouter } from 'nixle';
import { elysiaProvider } from '@nixle/elysia';

const app = new Elysia();

const usersRouter = createRouter('users', () => [
  {
    path: '/',
    handler() {
      return 'Hello Elysia!';
    },
  },
]);
const usersModule = createModule({
  routers: [usersRouter],
});
const server = createApp(elysiaProvider(app), {
  modules: [usersModule],
});

server.listen(4000);
