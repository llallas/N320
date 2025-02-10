const path = require("path");
const fs = require("fs");
const readline = require("readline");

const projectDirectory = path.resolve("output/cows");
const functionDirectory = path.join(projectDirectory, "functions");
const readmeFile = path.join(projectDirectory, "README.md");

if (!fs.existsSync(projectDirectory)) {
  fs.mkdirSync(projectDirectory);
}
if (!fs.existsSync(functionDirectory)) {
  fs.mkdirSync(functionDirectory);
}
