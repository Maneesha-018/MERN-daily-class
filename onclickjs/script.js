//   let student = [{
//             name:"rahul",
//             age:"23",
//             branch:"cse"
//         }]
// // 

// let a =10;
// function fun(){
//     let b=20;
//     console.log(b);
//     console.log(a);
// }
// fun()

// console.log(b);

// let add = function(a,b){
//     console.log(a+b)
// }

// add(5,4);

// let a=b=>
//     console.log(b);

// a(4);

// let student={
//     name:"maneesha",
//     age:"18",
//     course:"BCAI2025058",
//     city:"Dhanbad"
// }
// console.log(student.name);

// console.log(student.name = "muskan");

// *****Implicit*****
// let student=()=>({
//     name:"tasu",
//     age:18
// });
// console.log(student().name);

// let mul=(a,b)=>a*b;

// mul(5,2);
// console.log(mul());

// let student={
//     name:"maneesha",
//     age:"18",
//     regular:function(){
//         console.log(this.name)
//     },
//     arrow:()=>{
//         console.log(this.name)
//     }
// }
// student.regular();
// student.arrow();

// function student(name,age){
//     this.name=name;
//     this.age=age;
// }
// let student1= new student("rahul",18);

// console.log(student1.name);
// console.log(student1.age);

// ****callback function***
// let add=(repeat)=>{
//     console.log(45);
//     repeat();
// }

// let result=(callback)=>{
//     console.log(3)
//     callback(repeat);
// }
// let repeat=(again)=>{
//     console.log(5);
//     again();
// }
// result(add);

// ***settimeout function***
// setTimeout(function(){
//     console.log("hello")
// },5000)

// for(i=0;i<10;i++){
//     setTimeout(function(){
//     console.log("hello")
// },3000)
// }
let arr=[1,2,3,4,5,6,7]
arr.forEach((n)=>{
    console.log(n);
})