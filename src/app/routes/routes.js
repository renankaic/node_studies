const BookDao = require('../infra/book-dao');
const db = require('../../config/database');

//Exports this module as a function that must receive the "app" parameter when called
module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send('<h1>Code House</h1>');
    });

    app.get('/books', (req, res) => {
        const booksDao = new BookDao(db);
        booksDao.list()
                .then(books => {
                    res.marko(
                        require('../views/books/list/list.marko'),
                        {
                            books: books
                        }
                    )
                })
                .catch(error => console.log(error));
    });

    app.post('/books', (req, res) => {
        const booksDao = new BookDao(db);
        booksDao.create(req.body)
                .then(res.redirect('/books'))
                .catch(error => console.log(error));
    });

    app.get('/books/form', (req, res) => {
        res.marko(require('../views/books/forms/create.marko'));
    });

    app.get('/books/form/:id', (req, res) => {
        const booksDao = new BookDao(db);
        booksDao.get(req.params.id)
            .then(book => res.marko(require('../views/books/forms/update.marko'), { book }))
            .catch(error => console.log(error));
    });

    app.get('/books/:id', (req, res) => {
        const booksDao = new BookDao(db);
        booksDao.get(req.params.id)
                .then(book => res.marko( require('../views/books/book/book.marko') , { book }))
                .catch(error => console.log(error));
    });

    app.post('/books/:id', (req, res) => {
        const booksDao = new BookDao(db);
        booksDao.update(req.body)
                .then(res.redirect(`/books/${req.params.id}`))
                .catch(error => console.error(error));
    });

    app.get('/books/:id/delete', (req, res) => {
        const booksDao = new BookDao(db);
        booksDao.delete(req.params.id)
                .then(res.redirect('/books'))
                .catch(error => console.error(error));
    });

};