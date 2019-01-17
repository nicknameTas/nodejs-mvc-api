var MongoClient = require('mongodb').MongoClient;
var db = require('./../../config/db');

const option = {
    useNewUrlParser: true
};

class generateID {
    constructor() {

    }

    createID(collection, callback) { // Convert ID Object to ID Number
        MongoClient.connect(db.url, option, (err, db) => {
            if (err) throw err;
            var nameDB = db.db('quiz');
            var getId = 0;

            nameDB.collection(collection).find({}).toArray(function (err, result) {
                if (err) {
                    throw err;
                }
                else {
                    var id = result.length;
                    if (result == "") {
                        db.close();
                        return callback(id + 1);
                    } else {
                        result.find((data) => {
                            getId = data._id;
                        });
                    }

                    if (getId) {
                        db.close();
                        return callback(getId + 1);
                    }
                }
            });
        });
    }

}

module.exports = generateID;