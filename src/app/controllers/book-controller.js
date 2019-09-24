const db = require('../../config/database');
const BookDao = require('../data/book-dao');
const { validationResult } = require('express-validator/check');
const templates = require('../views/templates');

class BookController {

    static routes() {

        return {
            list: '/books',
            register: '/books/form',
            edit: '/books/form/:id',
            delete: '/books/:id'
        };

    }

    list(){

        return (req, res) => {
            const booksDao = new BookDao(db);
            booksDao.list()
                .then(books => {
                    res.marko(
                        templates.books.list,
                        { books: books }
                    )
                })
                .catch(error => console.log(error));
        };

    }

    create(){

        return (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {

                return res.marko(
                    templates.books.form,
                    { book: req.body, errors: errors.array() }
                );

            }

            const booksDao = new BookDao(db);
            booksDao.create(req.body)
                .then( res.redirect(BookController.routes().list) )
                .catch(error => console.log(error));
        };

    }

    createForm() {

        return (req, res) => {
            res.marko(
                templates.books.form,
                { book: {}, errors: [] }
            );
        };

    }

    update() {

        return (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {

                return res.marko(
                    templates.books.form,
                    { book: req.body, errors: errors.array() }
                );

            }

            const booksDao = new BookDao(db);
            booksDao.update(req.body)
                .then( res.redirect(BookController.routes().list) )
                .catch(error => console.error(error));
        };

    }

    updateForm() {

        return (req, res) => {
            const booksDao = new BookDao(db);
            booksDao.get(req.params.id)
                .then(book => res.marko(templates.books.form, { book, errors: [] }))
                .catch(error => console.log(error));
        };

    }

    delete() {

        return (req, res) => {
            const booksDao = new BookDao(db);
            booksDao.delete(req.params.id)
                .then(() => res.status(200).end())
                .catch(error => console.error(error));
        };

    }

}

module.exports = BookController;