//Exports this module as a function that must receive the "app" parameter when called
const bookRoutes = require('./book-routes');
const baseRoutes = require('./base-routes');

module.exports = (app) => {

    baseRoutes(app);
    bookRoutes(app);

};