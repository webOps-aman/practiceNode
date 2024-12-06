const fs = require('fs');

// create new file but yeah data ko overwrite kerdeta hai 
// fs.writeFileSync('bio.txt','mera naam kartik hai ji or meri umaar 27 saal ki hai ');

// add data without overwrite
// fs.appendFileSync('bio.txt', 'mera naam kartik hai ji or meri umaar 27 saal ki hai ');

// read data but isme output data buffer ma ayga
// const data = fs.readFileSync('bio.txt');
// console.log(data);


// // read data without buffer
// const data = fs.readFileSync('bio.txt', 'utf-8');
// console.log(data);


// rename the file 
// fs.renameSync('bio.txt', 'newBio.text');


// delete
fs.unlinkSync('newBio.text');

