import fp from 'fastify-plugin'
// import { join } from 'path'
// const postgresMigrations = require('postgres-migrations')
import { Pool } from 'pg'
import { host, database, port, user, password } from '../config/config'

// const migrationsPath = join(__dirname, 'migrations')

const pool = new Pool({
  host,
  port,
  user,
  database,
  password
})

// const migrate = async (client: Pool, path: string) => {
//   try {
//     await postgresMigrations.migrate({ client }, path)
//   } catch (e) {
//     console.log(e)
//   }
// }
//
// migrate(pool, migrationsPath).then()

export default fp(async (fastify, opts) => {
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
