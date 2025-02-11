const fs = require("node:fs");
function myReadfile(){
    try{
        const data = fs.readFileSync("dummy.txt","utf-8");
        console.log("File Data:",data);
    }
    catch(err){
        console.log("File Reading error:",err.message);
    }
}
const myWriteFile = (data) =>{
    try{
        fs.writeFileSync("dummy.txt",data);
        console.log("Successfully Write file");
    }
    catch(err){
        console.log("File Writing Error:",err.message);
    }
}
const myAppendFile = (data)=>{
    try{
        fs.appendFileSync("dummy.txt",data);
        console.log("Appended data Successfully");
    }
    catch(err){
        console.log("File Appending Error:",err.message)
    }
}
const myDeleteFile = (filename) =>{
    try{
        fs.unlinkSync(filename);
        console.log("Data is Deleted");
    }
    catch(err){
        console.log("File Deletion Error",err.message);
    }

}
 module.exports={
    myReadfile:myReadfile,
    myWriteFile:myWriteFile,
    myAppendFile:myAppendFile,
    myDeleteFile:myDeleteFile,
    username:"Abhishek",
 }
