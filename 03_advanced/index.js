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
//
const pessoaObj = { nome: "Rafael", surname: "Conrado" };
//props opcionais
function showNumbers(a, b, c) {
    console.log("A:" + a);
    console.log("B:" + b);
    if (c) {
        console.log("C:" + c);
    }
}
showNumbers(5, 10, 15);
showNumbers(20, 25);
//showNumbers(30)
//validando argumentos opcionais
function advacedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return (`Olá, ${firstName} ${lastName}, tudo bem?`);
    }
    return (`Olá, ${firstName}, tudo bem?`);
}
console.log(advacedGreeting("Rafael", "Conrado"));
console.log(advacedGreeting("de Souza"));
//union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(500);
showBalance("100");
//advanced
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1515);
showId("2020");
function showCoords(obj) {
    console.log(`X: ${obj.x} Y:${obj.y} Z:${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = { name: "Rafael", age: 22 };
console.log(somePerson);
//literal types
let test = "testando";
test = "testando";
console.log(test);
function showDirect(direcion) {
    console.log(`A direção é ${direcion}`);
}
showDirect("center");
//non null assertion operators
const p = document.getElementById("some-p");
console.log(p.innerText);
