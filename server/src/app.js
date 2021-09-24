const express = require('express');
const routes = require('./routes');


const buildApp = () =>{
    const app = express();
    routes.userRoutes(app)
    return app
}

module.exports = buildApp