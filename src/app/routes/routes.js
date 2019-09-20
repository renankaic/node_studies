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
        res.marko( require('../views/books/forms/form.marko') );
    });

};