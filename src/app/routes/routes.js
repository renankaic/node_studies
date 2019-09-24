//Controllers
const BookController = require('../controllers/book-controller');
const bookController = new BookController();
const BaseController = require('../controllers/base-controller');
const baseController = new BaseController();

//Models
const BookModel = require('../models/book');

//Exports this module as a function that must receive the "app" parameter when called
module.exports = (app) => {

    const baseRoutes = BaseController.routes();
    const bookRoutes = BookController.routes();

    //Home Page
    app.get(baseRoutes.home, baseController.home());

    //List the books
    app.get(bookRoutes.list, bookController.list());

    //Creates a new book
    app.post(bookRoutes.list, BookModel.validations(), bookController.create() );

    //Updates a book
    app.put(bookRoutes.list, BookModel.validations(), bookController.update());

    //Create book form
    app.get(bookRoutes.register, bookController.createForm());

    //Update book form
    app.get(bookRoutes.edit, bookController.updateForm());      

    //Deletes the book
    app.delete(bookRoutes.delete, bookController.delete());

};