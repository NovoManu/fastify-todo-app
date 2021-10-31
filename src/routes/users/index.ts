import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify"
import { usersSchema } from './schemas'
import { HTTP_METHODS } from '../../utils/enums/HTTP_METHODS'

const users: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.route({
    method: HTTP_METHODS.GET,
    url: '/',
    schema: usersSchema,
    handler: (request: FastifyRequest, reply: FastifyReply) => {
      reply
        .type('application/json')
        .send([
          {
            name: 'Manu',
            age: 40,
          },
          {
            name: 'Petr',
            age: 34,
          },
        ])
    }
  })
}

export default users;
