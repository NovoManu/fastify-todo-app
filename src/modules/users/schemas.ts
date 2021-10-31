import { FastifySchema } from 'fastify'
import { HTTP_STATUS_CODES } from '../../utils/enums/HTTP_STATUS_CODES'

export const usersListSchema: FastifySchema = {
  response: {
    [HTTP_STATUS_CODES.OK]: {
      description: 'Users list',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            type: "string"
          },
          age: {
            type: 'number'
          }
        },
      },
    }
  }
}
