const path = require("path");
const filePath = path.join("mainFolder", "subFolder", "data.txt");

const resolvedPath = path.resolve(filePath);
console.log(resolvedPath);

// result:d:\practiceNode\mainFolder\subFolder\data.txt
// note:isme full complete path jo create kiya gya  hai creation mai drive, folder, subfolder or filename with extension sab ayga isme

// isme Absolute path milta hai 