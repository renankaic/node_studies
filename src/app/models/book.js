const { check } = require('express-validator/check');

class Book {

    static validations() {

        return [
            check('titulo').isLength({ min: 5 }).withMessage("O Título precisa ter no mínimo 5 caracteres!"),
            check('preco').isCurrency().withMessage("O preço precisa ser um valor monetário válido!")
        ];

    }

}

module.exports = Book;