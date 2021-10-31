import { FastifyInstance, FastifyReply, FastifyRequest, RouteOptions } from 'fastify'
import { HTTP_METHODS } from '../../utils/enums/HTTP_METHODS'
import { HTTP_STATUS_CODES } from '../../utils/enums/HTTP_STATUS_CODES'
import { todosListSchema, todoGetSchema, todoCreateSchema } from './schemas'
import queries from './queries'
import { QueryResult } from 'pg'
import { Todo } from './types'

export const todosListRoute = (fastify: FastifyInstance): RouteOptions => {
  return {
    method: HTTP_METHODS.GET,
    url: '/',
    schema: todosListSchema,
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      const queryResult: QueryResult = await fastify.db().query(queries.list())
      reply
        .code(HTTP_STATUS_CODES.OK)
        .type('application/json')
        .send(queryResult.rows as Array<Todo>)
    }
  }
}

export const todoGetRoute = (fastify: FastifyInstance): RouteOptions => {
  return {
    method: HTTP_METHODS.GET,
    url: '/:id',
    schema: todoGetSchema,
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      const { id } = request.params as { id: string }
      const queryResult: QueryResult = await fastify.db().query(queries.get(id))
      if (queryResult.rows.length) {
        const [todo]  = queryResult.rows
        reply
          .code(HTTP_STATUS_CODES.OK)
          .send(todo as Todo)
      } else {
        reply
          .code(HTTP_STATUS_CODES.NOT_FOUND)
          .send({ message: 'Todo not found' })
      }
    }
  }
}

export const todosCreateRoute = (fastify: FastifyInstance): RouteOptions => {
  return {
    method: HTTP_METHODS.POST,
    url: '/create',
    schema: todoCreateSchema,
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      const { title } = request.body as Todo
      const queryResult: QueryResult = await fastify.db().query(queries.create({ title }))
      const [user]  = queryResult.rows
      reply
        .code(HTTP_STATUS_CODES.CREATED)
        .send(user as Todo)
    }
  }
}
