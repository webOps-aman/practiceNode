// const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     res.end('hello');
// });
// server.listen(4022, '127.0.0.1', () =>{
//     console.log('server runing on port no. 4022');
// })
// ___________


// const http = require('http');
// const server = http.createServer((req, res) => {
    
//     if(req.url === '/'){
//         res.end('Welcome To The HomePage.');
//     }else if(req.url === '/about'){
//         res.end('Welcome To The AboutPage.');
//     }else if(req.url === '/contact'){
//         res.end('Welcome To The ContactPage.');
//     }else if(req.url === '/download'){
//         res.end('Welcome To The DownloadPage.');
//     }else{
//         res.end('page not found');
//     }
    
// });
// server.listen(4022, '127.0.0.1', () =>{
//     console.log('server runing on port no. 4022');
// })
// _____________________



// const http = require('http');
// const server = http.createServer((req, res) => {
    
//     if(req.url === '/'){
//         res.end('Welcome To The HomePage.');
//     }else if(req.url === '/about'){
//         res.end('Welcome To The AboutPage.');
//     }else if(req.url === '/contact'){
//         res.end('Welcome To The ContactPage.');
//     }else if(req.url === '/download'){
//         res.end('Welcome To The DownloadPage.');
//     }else{
//         res.writeHead(404);
//         res.end('page not found');
//     }
    
// });
// server.listen(4022, '127.0.0.1', () =>{
//     console.log('server runing on port no. 4022');
// })
// ______________



// const http = require('http');
// const server = http.createServer((req, res) => {
    
//     if(req.url === '/'){
//         res.end('Welcome To The HomePage.');
//     }else if(req.url === '/about'){
//         res.end('Welcome To The AboutPage.');
//     }else if(req.url === '/contact'){
//         res.end('Welcome To The ContactPage.');
//     }else if(req.url === '/download'){
//         res.end('Welcome To The DownloadPage.');
//     }else{
//         res.writeHead(404);
//         res.end('<h1>page not found</h1>');
//     }
    
// });
// server.listen(4022, '127.0.0.1', () =>{
//     console.log('server runing on port no. 4022');
// })
// __________________



const http = require('http');
const server = http.createServer((req, res) => {
    
    if(req.url === '/'){
        res.end('Welcome To The HomePage.');
    }else if(req.url === '/about'){
        res.end('Welcome To The AboutPage.');
    }else if(req.url === '/contact'){
        res.end('Welcome To The ContactPage.');
    }else if(req.url === '/download'){
        res.end('Welcome To The DownloadPage.');
    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end('<h1>page not found</h1>');
    }
    
});
server.listen(4022, '127.0.0.1', () =>{
    console.log('server runing on port no. 4022');
})