const path = require("path");
const fs = require("fs");

// Path of Current Directory
const dirPath = path.join(__dirname);
console.log(dirPath);

// Path of a folder inside the current directory

const dirPathFiles = path.join(__dirname, "files");
console.log(dirPathFiles);

// Creating a number of files inside a directory

for (let i = 1; i <= 5; i++) {
  fs.writeFileSync(
    `${dirPathFiles}/newFile${i}.txt`,
    `This is a new File Number ${i}`
  );
}

// Reading File Names In A Directory - Takes two params First is the directory path and second is a arrow function

fs.readdir(dirPathFiles, (err, files) => {
  console.log(files);
});
// For getting files names discretely,

fs.readdir(dirPathFiles, (err, files) => {
  files.forEach((item) => {
    console.log(item);
  });
});
