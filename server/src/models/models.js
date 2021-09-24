const db = require("../config/connect_db");

const getUsers = () => {
  const sql = `SELECT * FROM users`
 return db.execute(sql);
};

module.exports = {
  getUsers,
};
