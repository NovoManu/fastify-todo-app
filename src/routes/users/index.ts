import { FastifyPluginAsync } from "fastify"

const users: FastifyPluginAsync =async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
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
  })
}

export default users;
