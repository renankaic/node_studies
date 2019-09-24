const uuid = require('uuid/v4');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UsuarioDao = require('../app/data/user-dao');
const db = require('./database');

module.exports = (app) => {

    passport.use(new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'senha'
        },
        (email, senha, done) => {

            const usuarioDao = new UsuarioDao(db);
            usuarioDao.buscaPorEmail(email)
                        .then( user => {

                            if (!user || senha != user.senha){
                                return done(null, false, {
                                    message: "Login e senha incorretos!"
                                });
                            }

                            return done(null, user);

                        })
                        .catch( error => done(error, false));

        }
    ));

    passport.serializeUser( (user, done) => {

        const userSession = {
            nome: user.nome_completo,
            email: user.email
        };

        done(null, userSession);

    });

    passport.deserializeUser( (userSession, done) => {
        done(null, userSession);
    });

    app.use(session({
        secret: 'node alura',
        genid: (req) => {
            return uuid();
        },
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use((req, res, next) =>{
        req.passport = passport;
        next();
    });

};