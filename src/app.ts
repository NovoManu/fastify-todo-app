import { join } from 'path';
import AutoLoad, {AutoloadPluginOptions} from 'fastify-autoload';
import { FastifyPluginAsync } from 'fastify';
import { setGracefulServer } from './gracefulServer';

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

const app: FastifyPluginAsync<AppOptions> = async (
    fastify,
    opts
): Promise<void> => {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: opts
  })
  
  void fastify.register(
    // @ts-ignore
    await import('fastify-prettier'),
    {
      fallbackOnError: false,
    }
  )
  
  // @ts-ignore
  void fastify.register(await import('fastify-request-timing'))
  
  void setGracefulServer(fastify)
};

export default app;
export { app }
