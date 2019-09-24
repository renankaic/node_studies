class BookDAO {

    constructor(db) {
        this._db = db;
    }

    list() {

        return new Promise( (resolve, reject) => {

            this._db.all(
                "SELECT * FROM livros", 
                (error, results) => {
                    if (error) return reject('Não foi possível listar os livros.');
                    return resolve(results);
                }
            );

        }); 

    }

    get(id){
        return new Promise((resolve, reject) => {

            this._db.get(
                `SELECT * FROM livros WHERE id = ?`,
                [id],
                (error, book) => {
                    if(error){
                        console.error(error);
                        return reject('Não foi possível encontrar o livro!')
                    }
                    return resolve(book);
                }
            );

        });
    }

    create(book) {
        return new Promise((resolve, reject) => {

            this._db.run(`
                INSERT INTO livros (titulo, preco, descricao) 
                values (?,?,?)
            `, [
                book.titulo,
                book.preco,
                book.descricao
            ], ( error ) => {
                if (error) {
                    console.error(error);
                    return reject('Não foi possível adicionar o livro')
                }
                resolve();
            });

        });
    }

    update(book) {

        return new Promise( (resolve, reject) => {

            this._db.run(
                `UPDATE livros SET titulo = ?, preco = ?, descricao = ? WHERE id = ?`,
                [book.titulo, book.preco, book.descricao, book.id],
                (error) => {

                    if(error){
                        console.error(error);
                        return  reject("Não foi possível atualizar o livro.")
                    }
                    resolve();

                }
            );

        });

    }

    delete(id) {

        return new Promise( (resolve, reject) => {

            this._db.run(
                `DELETE FROM livros WHERE id = ?`,
                [id],
                (error) => {

                    if (error){
                        console.error(error);
                        return reject("Não foi possível remover o livro!")
                    }
                    resolve();
                    
                }
            )

        });

    }

}

module.exports = BookDAO;