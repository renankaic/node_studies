const { check, validationResult } = require('express-validator/check');
const BookDao = require('../infra/book-dao');
const db = require('../../config/database');

//Exports this module as a function that must receive the "app" parameter when called
module.exports = (app) => {

    //Home Page
    app.get('/', (req, res) => {
        res.status(200).marko(
            require('../views/base/home/home.marko')
        );
    });

    //List the books
    app.get('/books', (req, res) => {
        const booksDao = new BookDao(db);
        booksDao.list()
                .then(books => {
                    res.marko(
                        require('../views/books/list/list.marko'),
                        { books }
                    )
                })
                .catch(error => console.log(error));
    });

    //Creates a new book
    app.post('/books', [
        check('titulo').isLength({ min: 5 }),
        check('preco').isCurrency()
    ], (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.marko(
                require('../views/books/forms/form.marko'),
                { book: {}, errors }
            );
        }

        const booksDao = new BookDao(db);
        booksDao.create(req.body)
                .then(res.redirect('/books'))
                .catch(error => console.log(error));
    });

    //Updates a book
    app.put('/books', (req, res) => {
        const booksDao = new BookDao(db);
        booksDao.update(req.body)
            .then(res.redirect(`/books`))
            .catch(error => console.error(error));
    });

    //Create book form
    app.get('/books/form', (req, res) => {
        res.marko(
            require('../views/books/forms/form.marko'),
            { book: {} }
        );
    });

    //Update book form
    app.get('/books/form/:id', (req, res) => {
        const booksDao = new BookDao(db);
        booksDao.get(req.params.id)
            .then(book => res.marko(require('../views/books/forms/form.marko'), { book }))
            .catch(error => console.log(error));
    });      
    
    //Details the book
    app.get('/books/:id', (req, res) => {
        const booksDao = new BookDao(db);
        booksDao.get(req.params.id)
            .then(book => res.marko(require('../views/books/book/book.marko'), { book }))
            .catch(error => console.log(error));
    });

    //Deletes the book
    app.delete('/books/:id', (req, res) => {
        const booksDao = new BookDao(db);
        booksDao.delete(req.params.id)
                .then(() => res.status(200).end())
                .catch(error => console.error(error));
    });

};