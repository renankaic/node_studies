//Exports this module as a function that must receive the "app" parameter when called
module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send('<h1>Casa do Codigo</h1>');
    });

    app.get('/livros', (req, res) => {
        res.send('<h1>Listagem de livros</h1>');
    });

};