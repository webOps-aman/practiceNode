// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('hello from the other side testing');
// });

// server.listen(8000, '127.0.0.1', () =>{
//     console.log('Listening to the port number: 8000');
// })
// _______________


// const http = require('http');
// const server = http.createServer((req, res) =>{
//     res.end("File Runing on Server!");
// });
// server.listen(3000, '127.0.0.1', () => {
//     console.log('Listening to the port number: 8000');
// })
// ____________


const http = require('http');
const server = http.createServer((req, res) => {
    res.end('starlink server');
});
server.listen(4000, '127.0.0.1', () =>{
    console.log('server runing on port no. 4000');
})