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