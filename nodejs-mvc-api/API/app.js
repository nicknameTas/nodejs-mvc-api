var app = require('express')();
var bodyParser = require('body-parser');
var routes = require('./routes');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use('/api', routes);
app.use('/*', (request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end("This URL is not a address for API");
});


module.exports = app;
