const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/testFile.txt`;
const newFilePath = `${dirPath}/message.txt`;

// Creating A File
fs.writeFileSync(filePath, "This is data coming into the file");

// Reading A File
fs.readFile(filePath, "utf8", (err, item) => {
  console.log(item);
});

// Update A File
fs.appendFile(filePath, " from an external server", (err) => {
  if (!err) console.log("file is updated!");
});

// Rename A File

fs.rename(filePath, newFilePath, (err) => {
  if (!err) console.log("File Renamed Successfully");
});

// Delete A File

fs.unlinkSync(newFilePath);
