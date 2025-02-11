const { myAppendFile, myDeleteFile, myReadfile, myWriteFile,username } = require("./fileSync1")

myReadfile();
const data = "MY FSD CLASS";
myWriteFile(data);
myReadfile();
myAppendFile(data);
myReadfile();
myDeleteFile("dummy.txt");
console.log("user name:",username);