class BookDAO {

    constructor(db) {
        this._db = db;
    }

    list( callback ) {
        this._db.all("SELECT * FROM livros", (error, results) => callback(error, results) );
    }

}

module.exports = BookDAO;