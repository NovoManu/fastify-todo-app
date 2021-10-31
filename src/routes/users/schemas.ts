import { FastifySchema } from 'fastify'
import { HTTP_STATUS_CODES } from '../../utils/enums/HTTP_STATUS_CODES'

export const usersSchema: FastifySchema = {
  response: {
    [HTTP_STATUS_CODES.OK]: {
      description: 'Users list',
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        age: {
          type: 'number',
        }
      },
    }
  }
}
