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
// let arr=[1,2,3,4,5,6,7]
// arr.forEach((n)=>{
//     console.log(n);
// })


// ******REST PERAMETER****//
//  (...n) => "spread syntax"//
// function add(...n){
//     let sum=0;
    // for(let val of n){
//     for(let i=0;i<n.length;i++){
//         sum=sum+n[i];
//     }
//     return sum;
// }
// let result = add(4,5,6);
// console.log(result);

//  function add(a,b,c){
//     console.log(a+b+c)
//  }
//  let n=[20,30,40,50,60]
//  add(...n)

// function add(){
//     for(let i=0;i<n.length-1;i++){
//         console.log(n[i]);
//     }
//  }
//  let n=[20,30,40,50,60]
//  add(...n)

// let arr=[10,20,30]
// let copy = arr;
// copy.push(30)
// console.log(arr)
// console.log(copy)//{ if we modify simple copyed array element then both original array and copyed array will modified }//


// let arr=[10,20,30]
// let copy = [...arr]
// copy.push(30);
// console.log(arr)
// console.log(copy)//{if we modify spread copyed array element then only copyed array will modified }//

// let arr = [10,20,30]
// let number = [40,50,60]
// let combined = [arr,number]
// console.log(combined)//{if we combined simple array element then the output will be [[10,20,30],[40,50,60]] like this.}//

// let arr = [10,20,30]
// let number = [40,50,60]
// let combined = [...arr,...number]
// console.log(combined)//{if we combined spread array element then the output will be [10,20,30,40,50,60] like this.}//

// let arr = [10,20,30,40];
// console.log(Math.max(arr));//{if we try to extract maximum number from the arr in this way output will be NaN}//

// let arr = [10,20,30,40];
// console.log(Math.max(...arr))//{if we try to extract maximum number from the arr using spread expression the output will be 40}//

// let student = {
//     name:"maneesha",
//     age:"18"
// }
// let student1 ={
//     course:"agrima",

//     marks:"18"
// }
// let combine = {...student,...student1}
// console.log(combine)//{variable name of both object must be diffrent to combin both object}//

//**push and unshift***//
// let arr=[4,5,6];
// arr.push(46);//{push is use to add element from ending}//
// console.log(arr);
// arr.unshift(8);//{unshift is used to add elemet from starting}//
// console.log(arr);
//**pop and shift**//
// arr.pop();//{pop is use to remove element from ending}//
// console.log(arr);
// arr.shift();//{shist is use to remove element from starting}//
// console.log(arr);

//***isArray function***//
// let arr=54;
// let arr1=[4,5,6,7];
// console.log(Array.isArray(arr1));
// let arr2="hello";
// function check(arr1){
//     if(Array.isArray(arr)){
//         return true;
//     }
//     return false;
// }
// check();
// console.log(arr);
// console.log(arr1);
// console.log(arr2);

// let arr=[67,8,33] //**indexOF and concat**//
// let arr1=[35,3,5]
// console.log(arr.indexOf(80))
// console.log(arr.concat(arr1))
// console.log(arr.reverse()) //**.reverse:{reverse the elements of array}**//

// let a="javascript"   //**reverse string value**//
// console.log(a.split(""))
// console.log(a.split("").reverse().join(""))

// let n=[10,25,6,84,55]  //**min and max:{find minimum and maximum value from the arr using spread operator**//
// console.log(Math.min(...n))
// console.log(Math.max(...n))

// let arr=[[67,8,35],[6,4,5]]  //**nested loop**/
// for(let i=0;i<arr.length;i++){
//     for(let val of arr[i]){
//         console.log(val)
//     }
// }

// let arr=[67,8,35] //**sort and arrow function{print elements of array in accending order}**//
// console.log(arr.sort((a,z)=>a-z))
//  let s = "A man, a plan, a canal: Panama"
//  s=s.toLowerCase();
//  console.log(s);
//  s = s.replaceAll(" ","").replaceAll(",","").replaceAll(":","");
//  let t=s;
//  s=s.split("");
//  console.log(s);
//  let s1;
//  console.log(t);
//  s1=s.reverse();
//  console.log(s1);
//  s1=s1.join("");
//  console.log(s1);
//  console.log(t);
//  if(s1==t){
//     console.log("yes");
//  }
//  else{
//     console.log("no");
//  }
// function student(name,age){
//     return{
//         name:name,
//         age:age
//     } 
//     let detail=student("rahul",24);
//     console.log(detail);
// }
  //**rename and default**//
let student={
    name:"rahul",
    age:24
}
let {name,age}=student;
console.log(name);
console.log(age);




 
