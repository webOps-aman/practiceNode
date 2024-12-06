const fs = require('fs');

// create file
// fs.writeFile('read.txt', 'hello node', (error) => {
//     console.log('file created successfully');
//     console.log(error);
// })


// add more data
// fs.appendFile('read.txt','most powerfull backend language', (error) => {
//     console.log('data append successfully');
//     console.log(error);
// })


// read data
fs.readFile('read.txt', 'utf-8', (error, response) => {
   
    console.log(response);
    console.log(error);
})
