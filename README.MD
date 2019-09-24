• A NodeJS project should first start with "npm init" to create the "package.json" file

• Use "npm install [module] --save-exact" to save the module as a project dependency

• The "node_modules" folder should be deleted when sharing the project. It does only works for the specific OS that was installed.

• "package.json" file contains the project dependencies and must be use by "npm install" command to install all depedencies

• To export a module, the "module.exports = [objects...]" must be used

• Use "npm install [module] --save-dev" to install a module to be used only in dev environment

• Use "npm install -g [module]" to install a module globally on the system. Example: nodemon

• "scripts" section inside the "package.json" file can be used to start the project with different presets with "npm [script_name]". Example: "npm start" will call "nodemon server.js" command

• "Marko" module framework can be used to generate page templates

• Use "npm config set cafile /path/to/your/cert.pem --global" to configure a cert for NPM

• Use the [body-parser] middleware to handle requisitions bodies.

• The middlewares ordering is very important!!!

• The "next()" function used in middlewares will execute the next middleware function. 

• Anything BEFORE the "next()" will be processed before the route. Everything AFTER the "next()" will be processed after the route code is finished.

• Use "app.use('/static', express.static('src/app/public'));" to serve static files inside the public folder 
with Express

• Use "methodOverride" middleware to deal with forms and HTTP requests methods, just like "PUT" when updating a resource

• Error handling middlewares must be after all middlewares

• Use express-validator middleware to validate input data

• Create a custom validator for express-validator: https://express-validator.github.io/docs/custom-validators-sanitizers.html#custom-validator

• Regex Expression validation: check('myField').matches(/* regular expression */)

• For Express Authentication, use the following modules:
    + passport-local@1.0.0
    + uuid@3.3.2
    + express-session@1.15.6
    + passport@0.4.0

• Use "/[resource]*" regex to filter which routes will require to be authenticated to allow access