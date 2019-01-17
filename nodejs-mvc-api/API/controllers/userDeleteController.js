var mongodb = require('../models').database.user;
const userDeleteController = {};

userDeleteController.get = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end("API Delete User");
}

userDeleteController.post = (request, response) => {
    const { data } = request.body;
    var database = new mongodb();
    var myobj = {
        "data": {
            "_id": data.id,
        },
        "col": {
            "collection": "user"
        }
    };
    database.delete(myobj, (result) => { // Recive Callback Data
        response.send(result);
    });
}

module.exports = userDeleteController;
console.log('Executing  userDeleteController.js');
