import { join } from 'path';
import AutoLoad, {AutoloadPluginOptions} from 'fastify-autoload';
import { FastifyPluginAsync } from 'fastify';
import GracefulServer from '@gquittet/graceful-server';

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
  
  const gracefulServer = GracefulServer(fastify.server)
  
  gracefulServer.on(GracefulServer.READY, () => {
    console.log('Server is ready')
  })
  
  gracefulServer.on(GracefulServer.SHUTTING_DOWN, () => {
    console.log('Server is shutting down')
  })
  
  gracefulServer.on(GracefulServer.SHUTDOWN, (error: Error) => {
    console.log('Server is down because of', error.message)
  })
  
  gracefulServer.setReady()

};

export default app;
export { app }
