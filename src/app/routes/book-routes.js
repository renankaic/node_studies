//Controllers
const BookController = require('../controllers/book-controller');
const bookController = new BookController();
const BaseController = require('../controllers/base-controller');

//Models
const BookModel = require('../models/book');

//Exports this module as a function that must receive the "app" parameter when called
module.exports = (app) => {

    const bookRoutes = BookController.routes();

    //Middleware to check if is authenticated to access this routes
    app.use(bookRoutes.authenticated, (req, res, next) => {

        if (req.isAuthenticated()){
            next();
        } else {
            res. redirect(BaseController.routes().login)
        }

    });

    //Lists the books
    app.get(bookRoutes.list, bookController.list());

    //Routes for book manipulation
    app.route(bookRoutes.register)
        .get(bookController.createForm())
        .post(BookModel.validations(), bookController.create())
        .put(BookModel.validations(), bookController.update())

    //Update book form
    app.get(bookRoutes.edit, bookController.updateForm());

    //Deletes the book
    app.delete(bookRoutes.delete, bookController.delete());

};