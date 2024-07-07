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