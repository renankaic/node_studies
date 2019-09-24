const { check }  = require('express-validator/check');

//Controllers
const BookController = require('../controllers/book-controller');
const bookController = new BookController();
const BaseController = require('../controllers/base-controller');
const baseController = new BaseController();

const bookValidations = [
    check('titulo').isLength({ min: 5 }).withMessage("O Título precisa ter no mínimo 5 caracteres!"),
    check('preco').isCurrency().withMessage("O preço precisa ser um valor monetário válido!")
];

//Exports this module as a function that must receive the "app" parameter when called
module.exports = (app) => {

    const baseRoutes = BaseController.routes();
    const bookRoutes = BookController.routes();

    //Home Page
    app.get(baseRoutes.home, baseController.home());

    //List the books
    app.get(bookRoutes.list, bookController.list());

    //Creates a new book
    app.post(bookRoutes.list, bookValidations, bookController.create() );

    //Updates a book
    app.put(bookRoutes.list, bookValidations, bookController.update());

    //Create book form
    app.get(bookRoutes.register, bookController.createForm());

    //Update book form
    app.get(bookRoutes.edit, bookController.updateForm());      

    //Deletes the book
    app.delete(bookRoutes.delete, bookController.delete());

};