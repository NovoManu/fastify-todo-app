import { User } from './types'

const resource = 'users'

const queries = {
  list: () => `SELECT * FROM ${resource}`,
  create: (payload: User) => {
    const names = Object.keys(payload)
    const values = Object.values(payload)
    const keys = names.map((_, i) => `$${++i}`).join(', ')
    return {
      text: `INSERT INTO ${resource}(${names.join(', ')}) VALUES(${keys}) RETURNING *`,
      values
    }
  }
}

export default queries
