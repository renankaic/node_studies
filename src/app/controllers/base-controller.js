const templates = require('../views/templates');
const BookController = require('./book-controller');

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

        return (req, res, next) => {
            
            const passport = req.passport;
            passport.authenticate('local', (error, user, info) => {

                if (info){
                    return res.marko(templates.base.login);
                }

                if (error){
                    return next(error);
                }

                req.login(user, (error) =>{

                    if (error) {
                        return next(error);
                    }

                    return res.redirect(BookController.routes().list);

                });

            }) (req, res, next);

        };

    }

}

module.exports = BaseController;