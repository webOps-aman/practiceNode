const path = require("path");
const filePath = path.join("mainFolder", "subFolder", "data.txt");

const extname = path.extname(filePath);
console.log(extname);

// result:.txt

