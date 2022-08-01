"use strict";
// TypeScript Basics
let id = 3;
let company = "normed";
let isPublished = true;
let x = 'Hello ahmed';
let ids = [1, 2, 3, 4, 5];
let arr = [2, 3, 'names', 'Asha'];
// Tuple
let person = [1, 'name', false];
// Tuple array
let employee;
employee = [
    [1, 'ahmed'],
    [2, 'abukar'],
    [3, 'omar'],
];
// Union
let pId = 22;
pId = '22';
// Enums 
var direction1;
(function (direction1) {
    direction1[direction1["Up"] = 0] = "Up";
    direction1[direction1["Down"] = 1] = "Down";
    direction1[direction1["Left"] = 2] = "Left";
    direction1[direction1["Right"] = 3] = "Right";
})(direction1 || (direction1 = {}));
var direction2;
(function (direction2) {
    direction2["Up"] = "Up";
    direction2["Down"] = "Down";
    direction2["Left"] = "Left";
    direction2["Right"] = "Right";
})(direction2 || (direction2 = {}));
console.log(direction1.Left);
console.log(direction2.Left);
// Objects
const user1 = {
    id: 1,
    name: 'John',
    phone: '2532212'
};
const user2 = {
    id: 3,
    name: 'Omar',
    phone: '616161'
};
// user2.name = 'ali'
// Type Assertions
let cId = 2;
// let customerId = <number>cId;
let customerId = cId;
customerId = 3;
// function
function func(x, y) {
    return x + y;
}
// void
function log(message) {
    console.log(message);
}
console.log(func(3, 2));
log('here we are');
let inUser = {
    id: 4,
    name: 'nur',
    phone: 34342333,
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name, phone) {
        this.id = id;
        this.name = name;
        this.phone = phone;
    }
}
const ahmed = new Person(1, 'ahmed', 34);
console.log(ahmed);
