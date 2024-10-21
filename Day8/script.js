const mypromise = new Promise((resolve,reject) => {
    let success = true;
    setTimeout(() =>{
        if(success){
            resolve("Data send successfully");
        }
        else{
            reject("Data Not Send");
        }
    },5000)
    });
mypromise.then((message) =>{
    console.log("Data: "+message);
})
.catch((error) =>{
    console.log(error);
});