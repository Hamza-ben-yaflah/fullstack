const Pool = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "hamza",
  host: "localhost",
  port: 5432,
  database: "todoList",
});

module.exports = pool;
