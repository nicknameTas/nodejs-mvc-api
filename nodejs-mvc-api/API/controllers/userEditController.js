var mongodb = require('../models').database.user;
const userEditController = {};

userEditController.get = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end("API Update User");
}

userEditController.post = (request, response) => {
    const { data } = request.body;
    var database = new mongodb();
    var myobj = {
        "data": {
            "_id": data.id,
            "username": data.username,
            "password": data.password,
            "email": data.email
        },
        "col": {
            "collection": "user"
        }
    };

    database.update(myobj, (result) => {
        response.send(result);
    });
}

module.exports = userEditController;
console.log('Executing  userEditController.js');
