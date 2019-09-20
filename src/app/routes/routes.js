const db = require('../../config/database');

//Exports this module as a function that must receive the "app" parameter when called
module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send('<h1>Code House</h1>');
    });

    app.get('/books', (req, res) => {

        db.all('SELECT * FROM livros', (error, result) => {

            res.marko(
                require('../views/books/list/list.marko'),
                {
                    books: result
                }
            )

        });
       
    });

};