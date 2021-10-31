import { FastifyInstance, FastifyPluginAsync } from "fastify"
import { routes } from '../../modules/users'

const index: FastifyPluginAsync = async (fastify: FastifyInstance, opts: Record<never, never>): Promise<void> => {
  fastify.route(routes.usersListRoute(fastify))
  fastify.route(routes.usersCreateRoute(fastify))
}

export default index;
