// 1 - Numbers
let x: number = 10

console.log(x)

x = 16

console.log(typeof x)

const y: number = 14.239393
console.log(typeof y)

console.log(y)
console.log(y.toPrecision(3))

// 2- Strings
const firstName: string = "Rafael"

console.log(firstName.toUpperCase())

let fullName: string

const lastName: string = "Souza"

fullName = firstName + " " + lastName

console.log(fullName)
console.log(typeof fullName)

// 3- Boolean
let a: boolean = false

console.log(a)
console.log(typeof a)

a = true
console.log(a)

// 4- Inference e annotation
const ann: string = "Teste"

let inf = "Teste"

//ann = 1 
//inf = 1

console.log("Testando 2")

//desafio 

const n: number = 10

const numberToString = n.toString()

const printMyNumber: string = `Imprima o ${numberToString}`

console.log(printMyNumber)