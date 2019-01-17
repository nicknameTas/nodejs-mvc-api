var server = require('./API/app');
const PORT = 3000;
server.listen(PORT, () => {
    console.log('Running Server Port' + PORT);
});
