const buildApp = require("./src/app");
const config = require("./src/config/config");
const {myData} = require('./src/config/connect_db')


const startApp = async () => {
  const app = buildApp();
  

  try {
      
    // const user = myData.query(`SELECT * from users`,
    // (err, results) => {
    //   console.log(results);
    // })
    await app.listen(config.port);
    console.log(`Node server is listening on port ${config.port}`);
  } catch (err) {
    throw err;
  }
};

startApp();
