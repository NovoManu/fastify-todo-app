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
          id: {
            type: 'number',
          },
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

export const userCreateSchema: FastifySchema = {
  body: {
    type: 'object',
    required: ['name', 'age'],
    properties: {
      name: { type: 'string' },
      age: { type: 'number' },
    }
  },
  response: {
    [HTTP_STATUS_CODES.CREATED]: {
      description: 'Created user',
      type: 'object',
      properties: {
        id: {
          type: 'number',
        },
        name: {
          type: "string"
        },
        age: {
          type: 'number'
        },
      },
    }
  }
}

