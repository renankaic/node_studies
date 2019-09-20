require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();

const routes = require('../app/routes/routes');
routes(app); //Calls the function exported by the required "routes" module sendind the "app" required parameter

//This will make the "app" variable visible when this module is required in a file
module.exports = app;