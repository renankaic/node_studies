• A NodeJS project should first start with "npm init" to create the "package.json" file
• Use "npm install [module] --save-exact" to save the module as a project dependency
• The "node_modules" folder should be deleted when sharing the project. It does only works for the specific OS that was installed.
• "package.json" file contains the project dependencies and must be use by "npm install" command to install all depedencies
• To export a module, the "module.exports = [objects...]" must be used