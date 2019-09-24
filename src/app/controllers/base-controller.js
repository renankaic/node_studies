const templates = require('../views/templates');


class BaseController {

    static routes(){

        return {
            home: '/'
        };

    }

    home() {

        return (req, res) => {
            res.status(200).marko(
                templates.base.home
            );
        };

    }

}

module.exports = BaseController;