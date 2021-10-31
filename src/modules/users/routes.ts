import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify'
import { HTTP_METHODS } from '../../utils/enums/HTTP_METHODS'
import { HTTP_STATUS_CODES } from '../../utils/enums/HTTP_STATUS_CODES'
import { usersSchema } from './schemas'

export const usersRoute: RouteOptions = {
  method: HTTP_METHODS.GET,
  url: '/',
  schema: usersSchema,
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    reply
      .code(HTTP_STATUS_CODES.OK)
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
}
