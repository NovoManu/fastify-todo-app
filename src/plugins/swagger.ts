import fp from 'fastify-plugin'
import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify'

export default fp(async (fastify, opts) => {
  fastify.register(require('fastify-swagger'), {
    routePrefix: '/docs',
    swagger: {
      info: {
        title: 'TODO API',
        description: 'Fastify swagger todo API',
        version: '0.1.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      host: 'localhost',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false
    },
    uiHooks: {
      onRequest (request: FastifyRequest, reply: FastifyReply, next: HookHandlerDoneFunction) { next() },
      preHandler (request: FastifyRequest, reply: FastifyReply, next: HookHandlerDoneFunction) { next() }
    },
    staticCSP: true,
    transformStaticCSP: (header: string) => header,
    exposeRoute: true
  })
})
