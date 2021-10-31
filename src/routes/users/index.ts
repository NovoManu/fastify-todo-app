import { FastifyInstance, FastifyPluginAsync } from "fastify"
import { usersRoute } from '../../modules/users'

const users: FastifyPluginAsync = async (fastify: FastifyInstance, opts: Record<never, never>): Promise<void> => {
  fastify.route(usersRoute)
}

export default users;
