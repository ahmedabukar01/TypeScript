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
