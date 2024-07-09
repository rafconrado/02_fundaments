"use strict";
// 1- Numbers
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
const names = ["Rafael", "Conrado"];
//names.push(4)
// 2- Sintaxe Array
const nums = [100, 200];
nums.push(300);
console.log(nums);
console.log(nums[0]);
// 3- Any
const arr1 = [1, "teste", true, [], { nome: "Rafael" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// 4- Parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(5, 15);
// 5 - Return Function
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting('Rafael'));
// 6 - Function anonymous
setTimeout(function () {
    const sallary = 1420;
    //console.log(parseFloat(sallary))
    //console.log(sallary)
}, 2000);
// 7 - Types of object
function passCoordinates(coord) {
    console.log("X cordinates: " + coord.x);
    console.log("X cordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
