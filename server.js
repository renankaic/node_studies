const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

app.get('/', (req, res) => {
    res.send('<h1>Casa do Código</h1>');
});

app.get('/livros', (req, res) => {
    res.send('<h1>Listagem de livros</h1>');
});