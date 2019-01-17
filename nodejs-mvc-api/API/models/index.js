var database = require('./database/index').database;
var token = require('./token/token');

module.exports = {
    database,
    token
};

console.log('Executing Models: index.js ...');