const resource = 'todos'

const queries = {
  list: () => `SELECT * FROM ${resource}`,
  get: (id: string) => `SELECT * FROM ${resource} WHERE id = $${id}`,
  create: (payload: any) => {
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
