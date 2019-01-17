var crypto = require('crypto');
const SaltLenght = 9;
var key = 'nitas@12&45$';

class token {
    constructor() {

    }

    accessToken() {
        var salt = this.generateSalt(SaltLenght);
        var hash = this.md5(key + salt);
        var SH = salt + hash;
        var token = Buffer.from(SH).toString('base64'); // Create Token Size 64bit
        return token;
    }
    
    generateSalt(len) { // Create Function Encode salt
        var set = '0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ',
            setLen = set.length,
            salt = '';
        for (var i = 0; i < len; i++) {
            var p = Math.floor(Math.random() * setLen);
            salt += set[p];
        }
        return salt;
    }
    
    md5(string) { // Create Function Encode md5
        return crypto.createHash('md5').update(string).digest('hex');
    }
}

module.exports = token;