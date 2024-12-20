const path = require("path");
const filePath = path.join("mainFolder", "subFolder", "data.txt");

const parsedata = path.parse(filePath);
console.log(parsedata);

// result:
// {
//     root: '',
//     dir: 'mainFolder\\subFolder',
//     base: 'data.txt',
//     ext: '.txt',
//     name: 'data'
//   }


// data object mai milta hai
