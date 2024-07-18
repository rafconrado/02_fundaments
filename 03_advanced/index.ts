// 1- Numbers
let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[2])

const names: string[] = ["Rafael", "Conrado"]

//names.push(4)

// 2- Sintaxe Array
const nums: Array<number> = [100, 200]

nums.push(300)

console.log(nums)

console.log(nums[0])

// 3- Any
const arr1: any = [1, "teste", true, [], {nome: "Rafael"}]

console.log(arr1)

arr1.push([1, 2, 3])

console.log(arr1)

// 4- Parametros tipados
function soma(a: number, b: number){
    console.log(a + b)
}

soma(5,15)

// 5 - Return Function
function greeting(name: string): string {
    return `Olá ${name}`
}

console.log(greeting('Rafael'))

// 6 - Function anonymous
setTimeout(function(){
    const sallary: number = 1420

    //console.log(parseFloat(sallary))
    //console.log(sallary)
}, 2000)

// 7 - Types of object
function passCoordinates(coord: {x: number, y:number}) {
    console.log("X cordinates: " + coord.x)
    console.log("X cordinates: " + coord.y)
}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord)

//

const pessoaObj: {nome: string, surname: string} = {nome:"Rafael", surname:"Conrado"}

//props opcionais

function showNumbers(a: number, b: number, c?: number){
    console.log("A:" + a)
    console.log("B:" + b)
    if(c){
        console.log("C:" + c)
    }
}

showNumbers(5, 10, 15)
showNumbers(20, 25)
//showNumbers(30)

//validando argumentos opcionais
function advacedGreeting(firstName: string, lastName?: string){
    
    if(lastName !== undefined){
        return(`Olá, ${firstName} ${lastName}, tudo bem?`)
    }

    return(`Olá, ${firstName}, tudo bem?`)
}

console.log(advacedGreeting("Rafael", "Conrado"))
console.log(advacedGreeting("de Souza"))

//union type
function showBalance(balance: string | number){
    console.log(`O saldo da conta é R$${balance}`)
}

showBalance(500)
showBalance("100")

//advanced
function showUserRole(role: boolean | string){
    if(typeof role === "boolean"){
        return "Usuário não aprovado!"
    }

    return `A função do usuário é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

//type alias
type ID = string | number

function showId(id: ID){
    console.log(`O ID é: ${id}`)
}

showId(1515)
showId("2020")

//interface
interface Point { 
    x: number
    y: number
    z: number
}

function showCoords(obj: Point){
    console.log(`X: ${obj.x} Y:${obj.y} Z:${obj.z}`)
}

const coordObj: Point={
    x:10,
    y:15,
    z:20
}

showCoords(coordObj)

//interface x type alias 
interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Rafael", age: 22}

console.log(somePerson)

//literal types
let test = "testando"

test = "testando"

console.log(test)

function showDirect(direcion: "left" | "center" | "right") {
    console.log(`A direção é ${direcion}`)
}

showDirect("center")

//non null assertion operators
const p = document.getElementById("some-p")

console.log(p!.innerText)

//bigint
let n = bigint

n = 1000n