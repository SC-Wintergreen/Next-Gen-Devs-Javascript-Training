const fs = require("fs");

const input = process.argv;
fs.writeFileSync(process.argv[3], process.argv[2]);
