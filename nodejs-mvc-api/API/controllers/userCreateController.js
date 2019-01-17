var mongodb = require('../models').database.user;
var token = require('./../models').token;
const userCreateController = {};

userCreateController.get = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end("API Create createUser");
}

userCreateController.post = (request, response) => {
    const { data } = request.body;
    var database = new mongodb();
    var generateToken = new token();
    var accessToken = generateToken.accessToken();
    var myobj = {
        "data": {
            "username": data.username,
            "password": data.password,
            "email": data.email,
            "token": accessToken
        },
        "col": {
            "collection": "user"
        }
    };
    
    database.create(myobj, (result) => {
        response.send(result);
    });
}

module.exports = userCreateController;
console.log('Executing  userCreateController.js');
