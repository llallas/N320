const path = require("path");

console.log(path.resolve("frog"));

const functionsFolder = path.resolve("functions");

console.log(path.join(functionsFolder, "index.js"));

console.log(path.join(functionsFolder, "functions"));

console.log(path.basename(functionsFolder));
