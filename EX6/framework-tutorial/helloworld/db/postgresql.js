const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test_db',
  password: 'ljc0000312Li',
  port: 5432,
})
module.exports = pool;
