import fp from 'fastify-plugin'
const postgresMigrations = require('postgres-migrations')
import { Pool } from 'pg'
import { host, database, port, user, password } from '../config/config'
import { FastifyInstance } from 'fastify'

const migrationsPath = 'src/migrations'

const pool = new Pool({
  host,
  port,
  user,
  database,
  password
})

const migrate = async (client: Pool, path: string) => {
  try {
    await postgresMigrations.migrate({ client }, path)
  } catch (e) {
    console.log({
      message: 'Could not apply migrations',
      error: e,
    })
  }
}

migrate(pool, migrationsPath).then()

export default fp(async (fastify:FastifyInstance) => {
  fastify.decorate('db', () => {
    return pool
  })
})

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    db(): Pool;
  }
}
