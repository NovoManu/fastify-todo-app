import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify'
import { HTTP_METHODS } from '../../utils/enums/HTTP_METHODS'
import { HTTP_STATUS_CODES } from '../../utils/enums/HTTP_STATUS_CODES'
import { usersListSchema } from './schemas'

export const usersListRoute: RouteOptions = {
  method: HTTP_METHODS.GET,
  url: '/',
  schema: usersListSchema,
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
