// let a = (x,y)=>{
//     console.log("Arrow Function");
//     console.log(x+y);
//     return x+y;
// }
// let b = ()=>console.log("Arrow function 2");
// let res = a('Rahul','Ravi');
// console.log(res);
// a(2,4);
// b();

//Query Selector------

// function display(){
//     let p1 = document.querySelectorAll('p');
//     p1[0].innerText = "I am in Parra";
//     p1[0].style.backgroundColor = "red";
//     p1[1].innerText = "I am in 2nd Parra";
//     p1[1].style.backgroundColor = "green";

//     let link = document.querySelector('a');
//     link.setAttribute("href","https://aktu.ac.in");
//     link.innerText="Aktu Website";
// }
// let show = ()=>{
//     let heading = document.querySelector("h1");
//     heading.textContent="Heading is Changed";
// }


// let addcontent = ()=>{
//     const newdiv = document.createElement('div');
//     newdiv.innerText="This is my new div";
//     newdiv.style.border="2px solid black";
//     const body = document.querySelector('body');
//     body.appendChild(newdiv);
// }
// let btn = document.querySelector("button");
// btn.addEventListener('click',()=>{
//     document.getElementById('res').innerText="Updated";
//     alert("Hello Event Listener");
    
// });
// document.getElementById('btn').onmouseover=()=>{
//     document.querySelector('body').style.backgroundColor='red';
// }
const handleclick=()=>
    {
      document.getElementById('btn').style.translate='30rem 0';
    }


    let btn=document.getElementById('btn');
    btn.addEventListener('click',handleclick)