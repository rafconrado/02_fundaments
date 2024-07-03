"use strict";
// 1 - Numbers
let x = 10;
console.log(x);
x = 16;
console.log(typeof x);
const y = 14.239393;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
// 2- Strings
const firstName = "Rafael";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Souza";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3- Boolean
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 4- Inference e annotation
const ann = "Teste";
let inf = "Teste";
//ann = 1 
//inf = 1
console.log("Testando 2");
//desafio 
const n = 10;
const numberToString = n.toString();
const printMyNumber = `Imprima o ${numberToString}`;
console.log(printMyNumber);
