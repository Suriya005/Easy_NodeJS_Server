const controllers = require("./controllers/controllers");


const userRoutes = (app) => {
  // เรียก user ทั้งหมด
  app.get("/users", controllers.getUsers);

  app.get("/", (req, res) => {
    res.send("node is work");
  });
};

module.exports = {userRoutes}
