// interface User{
//     username:string,
//     age:number,
// }
// let user:User={
//     username:"yashika",
//     age:90
// }
// console.log(user.username)
// console.log(user.age)
//user.age=40 ; //age can't be string, it should be number....



//array in typescript

// let num:number[]=[1,2,3,4,5]

// num[3]=45;

// //array of numbers and strings but not boolean ....

// let numstr:number[] | string[]=[];
// numstr[0]=1;
// numstr[1]="yesha";
// //
// //console.log(numstr);
// console.log(numstr[4]);




// /* INTERFACES IN TS */

// interface Emp{
//     id:number,
//     ename:string,
//     salary:number,
//     dep:string,
//     getName():string
//     getSalary():number
//     getDep():string

    
// }
// let emp:Emp ={
//     id:1,
//     ename:"ritik",
//     salary:20000,
//     dep:"IT",
//     getName:function(){
//         return this.ename
//     },
//     getSalary:function(){
//         return this.salary
//     },
//     getDep:function(){
//         return this.dep
//     },
// }
// interface Emp2{
//     //id:number,
//     ename:string,
//     salary:number,
//     dep:string,
//     getName():string
//     getSalary():number
//     getDep():string

    
// }

// let emp2:Emp2={
//     ename:"taneja",
//     salary:900000,
//     dep:"IT",
//     getName:function(){
//         return this.ename
//     },
//     getSalary:function(){
//         return this.salary
//     },
//     getDep:function(){
//         return this.dep
//     },

// }

// console.log(emp.getName())
// console.log(emp.getSalary())
// console.log(emp.getDep())










interface User{
    id:number,
    email:"sdffr5",
    password:1234
}
interface User1{
    id:number,
    email:"sdffr5",
    password:1234
}
interface User2{
    id:number,
    email:"sdffr5",
    password:1234
}

let users:User2[]=[
    {
    id:1,
    email:"sdffr5",
    password:1234
}
]

// OR (|)

//ya number array ya string array :------


let some:number | string;
let arr2:number[]  | string[]=["sdref","juhtthhhhhhh"]

//number or string both array

let arr3: (number|string)[]=[1,"344"]