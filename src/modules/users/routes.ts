import { FastifyInstance, FastifyReply, FastifyRequest, RouteOptions } from 'fastify'
import { HTTP_METHODS } from '../../utils/enums/HTTP_METHODS'
import { HTTP_STATUS_CODES } from '../../utils/enums/HTTP_STATUS_CODES'
import { usersListSchema, userCreateSchema } from './schemas'
import queries from './queries'
import { QueryResult } from 'pg'

export const usersListRoute = (fastify: FastifyInstance): RouteOptions => {
  return {
    method: HTTP_METHODS.GET,
    url: '/',
    schema: usersListSchema,
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      const users: QueryResult = await fastify.db().query(queries.list())
      reply
        .code(HTTP_STATUS_CODES.OK)
        .type('application/json')
        .send(users.rows)
    }
  }
}

export const usersCreateRoute = (fastify: FastifyInstance): RouteOptions => {
  return {
    method: HTTP_METHODS.POST,
    url: '/create',
    schema: userCreateSchema,
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      const { name, age } = request.body as { name: string; age: string }
      const user: QueryResult = await fastify.db().query(queries.create({ name, age }))
      reply
        .code(HTTP_STATUS_CODES.CREATED)
        .send(user.rows)
    }
  }
}
