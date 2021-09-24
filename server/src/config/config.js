const config = {
  port: process.env.PORT || 3000,
  dbconfig: {
    host: "localhost",
    user: "root",
    password: "",
    database:"myDB"  },
};
module.exports = config;
