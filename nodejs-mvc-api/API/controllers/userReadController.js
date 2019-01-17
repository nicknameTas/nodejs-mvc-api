var mongodb = require('../models').database.user;
const userReadController = {};

userReadController.get = (request, response) => {
    var database = new mongodb();
    var myobj = {
        col: {
            "collection": "user"
        }
    };

    database.read(myobj, (result) => {
        response.send(result);
    });
}

module.exports = userReadController;
console.log('Executing  userReadController.js');
