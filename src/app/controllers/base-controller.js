const templates = require('../views/templates');


class BaseController {

    static routes(){

        return {
            home: '/',
            login: '/login'
        };

    }

    home() {

        return (req, res) => {
            res.status(200).marko(
                templates.base.home
            );
        };

    }

    loginPage() {

        return (req, res) => {
            res.marko( templates.base.login )
        };

    }

    login() {

        return (req, res) => {

        };

    }

}

module.exports = BaseController;