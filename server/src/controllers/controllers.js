const getModels = require("../models/models");

const getUsers =  async (req, res) => {
   const [BinaryRow] = await getModels.getUsers()
  console.log(BinaryRow);
  res.send(BinaryRow);
  };

module.exports = {
    getUsers,

  };
  