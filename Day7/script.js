//Map() Method ------
// let num = [1,2,3,4,5]
// let newnum = num.map(x => x*2);
// console.log(newnum);

// Filter() Method-----
// let evennum = num.filter(even => even%2==0);
// console.log(evennum);

//Reduce() Method------
// Here x is accumulator and y is current value 
// let sum = num.reduce((x,y)=>x+y,0);
// console.log(sum);

// let mul = num.reduce((x,y)=>x*y,1);
// console.log(mul);

// const students = [
//     {name: 'Alice',score:50},
//     {name: 'Bob',score:65},
//     {name: 'Charlie',score:80},
//     {name: 'David',score:45},
//     {name: 'Rahul',score:50}
// ];
// Without Map----
// let scores = students.filter(x => x.score>60).reduce((x,y)=>x+y.score,0);

// let scores = students.filter(x => x.score>60).map((x)=>x.score+10).reduce((x,y)=>x+y,0);
// console.log(scores);

// ForEach Method----
// let num1 = [2,4,5,6,3,7,9];
// let newarr = num1.forEach((x)=>console.log(x*3));

// Callback Function-----
// sayhello = ()=>{
//     console.log("I am in Hello Function");
// }
// console.log("Start");
// setTimeout(sayhello,3000);
// console.log("End");

console.log("Start");
setTimeout(()=>{
    console.log("first task completed");
    setTimeout(()=>{
        console.log("second task completed");
    setTimeout(()=>{
        console.log("third task completed");
    },3000);
},2000);
},1000);
console.log("End");