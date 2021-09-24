const { dbconfig } = require("./config");
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: dbconfig.host,
  user: dbconfig.user,
  database: dbconfig.database,
  password: dbconfig.password,
});

module.exports = pool.promise();
