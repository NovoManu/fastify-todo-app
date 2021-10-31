import GracefulServer from '@gquittet/graceful-server';
import { FastifyInstance } from 'fastify'

export const setGracefulServer = (fastify: FastifyInstance): void => {
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
}
