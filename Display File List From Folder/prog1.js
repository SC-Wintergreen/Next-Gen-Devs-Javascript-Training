const path = require("path");
const fs = require("fs");

// Path of Current Directory
// const dirPath = path.join(__dirname);
// console.log(dirPath);

// Path of a folder inside the current directory

const dirPathFiles = path.join(__dirname, "files");
console.log(dirPathFiles);

const dirPathFilesContent = path.join(__dirname, "files/content");
console.log(dirPathFilesContent);

// Creating a number of files inside a directory

for (let i = 1; i <= 5;i++)
