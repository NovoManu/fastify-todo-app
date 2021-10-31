const createTodosTable = `
  CREATE TABLE todos (
      id      SERIAL PRIMARY KEY,
      task    VARCHAR (255)
  );
`

module.exports.generateSql = () => createTodosTable
