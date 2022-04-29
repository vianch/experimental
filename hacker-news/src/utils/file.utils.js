const fs = require("fs");
const path = require("path");

function fileToString(filePath, encode = "utf8") {
  return fs.readFileSync(path.join(__dirname, `../${filePath}`), encode);
}

module.exports = {
  fileToString,
};
