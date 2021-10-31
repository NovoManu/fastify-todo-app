const createUsersTable = `
  CREATE TABLE users (
      id      SERIAL PRIMARY KEY,
      name    VARCHAR (40),
      age     INT
  );
`

module.exports.generateSql = () => createUsersTable
