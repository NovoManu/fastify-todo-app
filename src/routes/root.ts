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
  
  const modules = '../modules'
  
  const normalizedPath = require("path").join(__dirname, modules);
  
  require("fs").readdirSync(normalizedPath).forEach((file: string) => {
    const module = require(`${modules}/${file}`)
    Object.values(module.routes).forEach((controller: any) => {
      const route = controller(fastify)
      if (!route.url.startsWith('/')) {
        route.url = `/${route.url}`
      }
      route.url = `/${file}${route.url}`
      fastify.route(route)
    })
  });
}

export default root;
