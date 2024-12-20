const path = require("path");
const filePath = path.join("mainFolder", "subFolder", "data.txt");

const basename = path.basename(filePath);
console.log(basename);

// result: data.txt
// isme file ka naame or extension ka naame ath ahai

