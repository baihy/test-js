
var fs = require("fs");
var openSync = fs.openSync("hello.txt", "w");
fs.writeSync(openSync, "hello world");
fs.closeSync(openSync);