// This works also with object

let arr1 = [1,2,3]
let arr2 = arr1

arr2.push(4) // this also changes the arr 1

console.log(arr1)
console.log(arr2)

console.log('**********************************')

let arr3 = [1,2,3]
let arr4 = [...arr3] // Spread operator
arr4.push(4) // That doesnt change vall
console.log(arr3)
console.log(arr4)

// Same work with object
console.log('***********************************')
