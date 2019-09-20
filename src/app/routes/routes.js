//Exports this module as a function that must receive the "app" parameter when called
module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send('<h1>Code House</h1>');
    });

    app.get('/books', (req, res) => {
        res.marko(
            require('../views/books/list/list.marko')
        )
    });

};