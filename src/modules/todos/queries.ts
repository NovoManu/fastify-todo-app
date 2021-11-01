import { Todo } from './types'

const resource = 'todos'

const queries = {
  list: () => `SELECT * FROM ${resource}`,
  get: (id: string) => `SELECT * FROM ${resource} WHERE id = ${id}`,
  create: (payload: Todo) => {
    const names = Object.keys(payload)
    const values = Object.values(payload)
    const keys = names.map((_, i) => `$${++i}`).join(', ')
    return {
      text: `INSERT INTO ${resource}(${names.join(', ')}) VALUES(${keys}) RETURNING *`,
      values
    }
  },
  update: (todo: Todo) => {
    const keys = Object.keys(todo);
    const dataTuples = keys.map((k, index) => `${k} = $${index + 1}`);
    const updates = dataTuples.join(", ");
    const text = `UPDATE ${resource} SET ${updates} WHERE id=${todo.id} RETURNING *`;
    const values: Array<string | number> = [];
    Object.keys(todo).forEach(key => {
      // @ts-ignore
      values.push(todo[key]);
    });
  
    return { text, values };
  }
}

export default queries
