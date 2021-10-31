const createTodosTable = `
  CREATE TABLE todos (
      id      SERIAL PRIMARY KEY,
      title    VARCHAR (255)
  );
`

module.exports.generateSql = () => createTodosTable
