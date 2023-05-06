const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: "efedbfmc",
  password: "D2C4NzY9RM0wBVMyLlBIpEXu8bqVIh-5",
  host: "tiny.db.elephantsql.com",
  port: 5432,
  database: "efedbfmc",
});

module.exports = pool;
