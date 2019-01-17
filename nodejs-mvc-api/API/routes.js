var routes = require("express")();
var userReadController = require('./controllers/userReadController');
var userCreateController = require('./controllers/userCreateController');
var userEditController = require('./controllers/userEditController');
var userDeleteController = require('./controllers/userDeleteController');

routes.get('/', (request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end("API");
});

// Routes File
routes.get('/userData', userReadController.get);
routes.get('/userCreate', userCreateController.get);
routes.post('/userCreate', userCreateController.post);
routes.get('/userEdit', userEditController.get);
routes.post('/userEdit', userEditController.post);
routes.get('/userDelete', userDeleteController.get);
routes.post('/userDelete', userDeleteController.post);

module.exports = routes;