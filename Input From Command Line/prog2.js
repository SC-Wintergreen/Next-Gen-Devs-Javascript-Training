const fs = require("fs");

const input = process.argv;

if (input[2].toLowerCase() === "create") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2].toLowerCase() === "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.error("Invalid Input!");
}
