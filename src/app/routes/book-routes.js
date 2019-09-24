//Controllers
const BookController = require('../controllers/book-controller');
const bookController = new BookController();

//Models
const BookModel = require('../models/book');

//Exports this module as a function that must receive the "app" parameter when called
module.exports = (app) => {

    const bookRoutes = BookController.routes();

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