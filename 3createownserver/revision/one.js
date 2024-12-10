const http = require('http');

//creating server
const server = http.createServer((req, res) =>{
    res.end("Hello, Developers");
});

//calling server or listen 
server.listen(4000, '127.0.0.1', () => {
    console.log("Listening Server On port 4000");
});