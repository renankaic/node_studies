class BaseController {

    static routes(){

        return {
            home: '/'
        };

    }

    home() {

        return (req, res) => {
            res.status(200).marko(
                require('../views/base/home/home.marko')
            );
        };

    }

}

module.exports = BaseController;