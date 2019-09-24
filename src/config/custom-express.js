require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//Defining middlewares
app.use('/static', express.static('src/app/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride(function (req, res) {

    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
    
}));

const routes = require('../app/routes/routes');
routes(app); //Calls the function exported by the required "routes" module sendind the "app" required parameter

//Creating a Middleware to handle HTTP 404
app.use((request, response, next) => {
    return response.status(404).marko(
        require('../app/views/base/errors/404.marko')
    );
});

//Creating a Middleware to handle HTTP 500
app.use((error, request, response, next) => {
    console.error(error);
    return response.status(500).marko(
        require('../app/views/base/errors/500.marko')
    );
});

//This will make the "app" variable visible when this module is required in a file
module.exports = app;