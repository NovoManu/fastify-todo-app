import { FastifyPluginAsync, FastifyReply, FastifyRequest, FastifySchema } from 'fastify'
import { HTTP_METHODS } from '../utils/enums/HTTP_METHODS'
import { HTTP_STATUS_CODES } from '../utils/enums/HTTP_STATUS_CODES'

const schema: FastifySchema = {
  response: {
    [HTTP_STATUS_CODES.OK]: {
      description: 'Root route',
      type: 'object',
      properties: {
        root: {
          type: 'boolean'
        }
      },
      example: {
        root: true,
      }
    }
  }
}

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.route({
    method: HTTP_METHODS.GET,
    url: '/',
    schema,
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      reply.send({ root: true })
    }
  })
}

export default root;
