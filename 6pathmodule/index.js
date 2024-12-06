// const path = require("path");
// console.log(__dirname);
// result// d:\practiceNode\6pathmodule
// ___________


// const path = require("path");
// console.log(__filename);
//result // d:\practiceNode\6pathmodule\index.js
// ________________


// // to create path(important)
// const path = require("path");
// const filePath = path.join("folder", "students", "data.txt");
// console.log(filePath);
// result// folder\students\data.txt
// __________________



// // resolvedPath
// const path = require("path");
// const filePath = path.join("folder", "students", "data.txt");
// const resolvedPath = path.resolve(filePath);
// console.log(resolvedPath);
//result // d:\practiceNode\folder\students\data.txt
// _____________



// // extname
// const path = require("path");
// const filePath = path.join("folder", "students", "data.txt");
// const extname = path.extname(filePath);
// console.log(extname);
//result // .txt
// ____________


// // basename
// const path = require("path");
// const filePath = path.join("folder", "students", "data.txt");
// const basename = path.basename(filePath);
// console.log(basename);
//result // data.txt
// ___________________________




// // dirname
// const path = require("path");
// const filePath = path.join("folder", "students", "data.txt");
// const dirname = path.dirname(filePath);
// console.log(dirname);
// result// folder\students
// ___________________



// // parse
// const path = require("path");
// const filePath = path.join("folder", "students", "data.txt");
// const parse = path.parse(filePath);
// console.log(parse);
// // {
// //     root: '',
// //     dir: 'folder\\students',
// //     base: 'data.txt',
// //     ext: '.txt',
// //     name: 'data'
// //   }
// ________________



// // sep
// const path = require("path");
// const filePath = path.join("folder", "students", "data.txt");
// const sep = path.sep;
// console.log(sep);
// result// \
// ___________






// const path = require("path");
// const filePath = path.join("folder", "students", "data.txt");
// const resolvedPath = path.resolve(filePath);
// const extname = path.extname(filePath);
// const basename = path.basename(filePath);
// const dirname = path.dirname(filePath);
// const parse = path.parse(filePath);
// const sep = path.sep;
// console.log({resolvedPath, extname, basename, dirname, parse, sep});
// // {
// //     resolvedPath: 'd:\\practiceNode\\folder\\students\\data.txt',
// //     extname: '.txt',
// //     basename: 'data.txt',
// //     dirname: 'folder\\students',
// //     parse: {
// //       root: '',
// //       dir: 'folder\\students',
// //       base: 'data.txt',
// //       ext: '.txt',
// //       name: 'data'
// //     },
// //     sep: '\\'
// //   }
