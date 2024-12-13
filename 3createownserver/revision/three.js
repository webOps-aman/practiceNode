// new 

// //require http
// const http = require('http');
// const port = 8000;
// const hostName = "127.0.0.1";

// //server create
// const server = http.createServer((req, res) => {
//     if(req.url === "/"){
//         res.write('Welcome to the Homepage');
//         res.end();
//     }else if(req.url === "/about"){
//         res.write('Welcome to the Aboutpage');
//         res.end();
//     }else if(req.url === "/contact"){
//         res.write('Welcome to the Contactpage');
//         res.end();
//     }else{
//         res.write('Oops! page not found');
//         res.end();
//     }
// });

// //listen server
// server.listen(port, hostName, () => {
//     console.log(`Listening on port ${port}`);
// })
// __________________







//require http
const http = require('http');
const port = 8000;
const hostName = "127.0.0.1";

//server create
const server = http.createServer((req, res) => {
    if(req.url === "/"){
        // res.setHeader("Content-Type", "text/html");
        res.write('<h1>Welcome to the Homepage</h1>');
        res.end();
    }else if(req.url === "/about"){
        res.setHeader("Content-Type", "text/plain");
        res.write('Welcome to the Aboutpage');
        res.end();
    }else if(req.url === "/contact"){
        res.setHeader("Content-Type", "text/plain");
        res.write('Welcome to the Contactpage');
        res.end();
    }else{
        res.setHeader("Content-Type", "text/plain");
        res.write('Oops! page not found');
        res.end();
    }
});

//listen server
server.listen(port, hostName, () => {
    console.log(`Listening on port ${port}`);
})
