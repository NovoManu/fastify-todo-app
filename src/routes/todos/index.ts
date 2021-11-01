import { FastifyInstance, FastifyPluginAsync } from "fastify"
import { routes } from '../../modules/todos'

const index: FastifyPluginAsync = async (fastify: FastifyInstance, opts: Record<never, never>): Promise<void> => {
  fastify.route(routes.todosListRoute(fastify))
  fastify.route(routes.todoGetRoute(fastify))
  fastify.route(routes.todosCreateRoute(fastify))
  fastify.route(routes.todosUpdateRoute(fastify))
}

export default index;
