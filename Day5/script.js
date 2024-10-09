// "use strict";
// let a=12;
// const PI = 3.14;
// let $ = 12;
// let _ = 22/7;

// console.log($);
// console.log(_);

// checking Type---

// let na = "Hello";
// let d = [1,2,3,4];
// let e = {
//     name: 'Abhi',
//     roll : 23
// };
// let bool = true;
// console.log(typeof(a));
// console.log(typeof(PI));
// console.log(typeof(na));
// console.log(typeof(d));
// console.log(typeof(e));
// console.log(typeof(bool));


 //Type Conversion
// let x = "12"/"6";
// console.log(x);
// let bol = true;
// let str = String(bol);
// console.log(str);
// console.log(str.charAt(1));
// console.log(typeof(str));

// let str1 = "true";
// let b = Boolean(str1);
// console.log(b);

// let b1 = Boolean(3);
// console.log(b1);

// Function---
// function display(){
//     confirm method---

//     let x1= confirm("Are you Sure");
//     alert("User Click "+x1);

//     Prompt Method--
//     let x1 = prompt("Enter your Name: ","Abhishek Singh");
//     alert(x1);
// }
// checking a===b ----

// let a1="34";
// let a2=34.0;
// console.log(a1===a2);

// Function of validation ------------
function validate(){
    let user = document.getElementById("username").value;
    let password = document.getElementById("user_password").value;
    let user_result = document.getElementById("result");
    if(user=="admin" && password=="admin"){
        user_result.innerText="Login Success";
    }
    else{
        user_result.innerText="Login Failed";
    }
}

