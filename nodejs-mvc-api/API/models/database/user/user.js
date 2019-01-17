var MongoClient = require('mongodb').MongoClient;
var db = require('./../../../config/db');
var generateID = require('./../genetareID');

const option = {
    useNewUrlParser: true
};

class user {
    constructor() {

    }

    // Create Data in mongodb
    create(myobj, callback) {
        var getId = new generateID();
        getId.createID(myobj.col.collection, (id) => {
            MongoClient.connect(db.url, option, (err, db) => {
                var nameDB = db.db('mydb');
                var data = {
                    _id: id,
                    username: myobj.data.username,
                    password: myobj.data.password,
                    email: myobj.data.email,
                    token: myobj.data.token,
                    create_time: new Date(),
                    update_time: new Date()
                };
                nameDB.collection(myobj.col.collection).insertOne(data, (err, result) => {
                    if (err) {
                        result = '{"status" : "error"}';
                        console.log(err);
                        return callback(result);
                    }
                    else {
                        result = '{"status" : "success"}';
                        db.close();
                        return callback(result);
                    }
                });
            });
        });
    }

    // Read Data in mongodb
    read(myobj, callback) {
        client.connect(db.url, option, function (err, db) {
            if (err) throw err;
            var dbo = db.db('myDB');
            dbo.collection(myobj.collection).find({}).toArray((err, result) => {
                if (err) {
                    result = '{"status" : "error"}';
                    console.log(err);
                    return callback(result);
                }
                else {
                    db.close();
                    return callback(result);
                }
            })
        });
    }
    
    // Edit Data in mongodb
    update(myobj, callback) {
        MongoClient.connect(db.url, option, (err, db) => {
            var nameDB = db.db('myDB');
            var myquery = { _id: myobj.data._id };
            var newvalues = {
                $set: {
                    _id: myobj.data._id,
                    username: myobj.data.username,
                    password: myobj.data.password,
                    email: myobj.data.email,
                    update_time: new Date()
                }
            };
            nameDB.collection(myobj.col.collection).updateOne(myquery, newvalues, { multi: true }, (err, result) => {
                if (err) {
                    result = '{"status" : "error"}';
                    console.log(err);
                    return callback(result);
                }
                else {
                    result = '{"status" : "success"}';
                    db.close();
                    return callback(result);
                }
            });
        });
    }

    // Delete Data in mongodb
    delete(myobj, callback) {
        MongoClient.connect(db.url, option, (err, db) => {
            var nameDB = db.db('myDB');
            var dataQuestion = { _id: myobj.data._id };
            nameDB.collection(myobj.col.collectionQuestion).deleteOne(dataQuestion, (err, result) => { // delete data in collection question
                if (err) {
                    result = '{"status" : "error"}';
                    console.log(err);
                    return callback(result);
                }
                else {
                    result = '{"status" : "success"}';
                    db.close();
                    return callback(result);
                }
            });
        });
    }
}

module.exports = user;