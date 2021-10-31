import { FastifySchema } from 'fastify'
import { HTTP_STATUS_CODES } from '../../utils/enums/HTTP_STATUS_CODES'

export const todosListSchema: FastifySchema = {
  response: {
    [HTTP_STATUS_CODES.OK]: {
      description: 'Todos list',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
          },
          title: {
            type: "string"
          },
        },
      },
    }
  }
}

export const todoGetSchema: FastifySchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'number' },
    }
  },
  response: {
    [HTTP_STATUS_CODES.OK]: {
      description: 'Todo item',
      type: 'object',
      properties: {
        id: {
          type: 'number',
        },
        title: {
          type: "string"
        },
      },
    }
  }
}

export const todoCreateSchema: FastifySchema = {
  body: {
    type: 'object',
    required: ['title'],
    properties: {
      title: { type: 'string' },
    }
  },
  response: {
    [HTTP_STATUS_CODES.CREATED]: {
      description: 'Created todo',
      type: 'object',
      properties: {
        id: {
          type: 'number',
        },
        title: {
          type: "string"
        },
      },
    }
  }
}

