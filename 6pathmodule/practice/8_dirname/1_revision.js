const path = require("path");
const filePath = path.join("mainFolder", "subFolder", "data.txt");

const dirname = path.dirname(filePath);
console.log(dirname);


// result: mainFolder\subFolder
// yeah folder ka naam (without drive, filename, extension)
