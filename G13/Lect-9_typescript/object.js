"use strict";
let user = {
    username: "yashika",
    age: 90
};
console.log(user.username);
console.log(user.age);
//user.age=40 ; //age can't be string, it should be number....
//array in typescript
let num = [1, 2, 3, 4, 5];
num[3] = 45;
//array of numbers and strings but not boolean ....
let numstr = [];
numstr[0] = 1;
numstr[1] = "yesha";
//
//console.log(numstr);
console.log(numstr[4]);
let emp = {
    id: 1,
    ename: "ritik",
    salary: 20000,
    dep: "IT",
    getName: function () {
        return this.ename;
    },
    getSalary: function () {
        return this.salary;
    },
    getDep: function () {
        return this.dep;
    },
};
let emp2 = {
    ename: "taneja",
    salary: 900000,
    dep: "IT",
    getName: function () {
        return this.ename;
    },
    getSalary: function () {
        return this.salary;
    },
    getDep: function () {
        return this.dep;
    },
};
console.log(emp.getName());
console.log(emp.getSalary());
console.log(emp.getDep());
