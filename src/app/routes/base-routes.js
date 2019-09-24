//Controllers
const BaseController = require('../controllers/base-controller');
const baseController = new BaseController();

//Exports this module as a function that must receive the "app" parameter when called
module.exports = (app) => {

    const baseRoutes = BaseController.routes();

    //Home Page
    app.get(baseRoutes.home, baseController.home());

};