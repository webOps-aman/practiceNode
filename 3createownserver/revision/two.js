const http = require('http');
const port = 4200;
const hostName = '127.0.0.1';

//creating server
const server = http.createServer((req, res) => {
    res.end('hello server');
});

//calling server or listen
server.listen(port, hostName, () => {
    console.log(`listening server on port ${port}`);
});