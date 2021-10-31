import { FastifyInstance, FastifyPluginAsync } from "fastify"
import { usersListRoute } from '../../modules/users'

const users: FastifyPluginAsync = async (fastify: FastifyInstance, opts: Record<never, never>): Promise<void> => {
  fastify.route(usersListRoute)
}

export default users;
