const pg = require("pg");

const pool = new pg.Pool({
  user: "postgres",
  password: "hamza",
  host: "localhost",
  port: 5432,
  database: "newtodo",
});

module.exports = pool;
