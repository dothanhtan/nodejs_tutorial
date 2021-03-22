var fs = require("fs");
var content = fs.readFileSync(__dirname + "/data.txt");
console.log(content);
console.log(content.toString());