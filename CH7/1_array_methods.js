// reverse M
// let letter = ['a', 'b', 'c']
// let copied = letter.reverse()
// console.log(letter)
// console.log(copied)



// Concate IM
// let letter = ['a', 'b', 'c']
// let no = [1, 2, 3]
// let concated = letter.concat(no)
// console.log(concated)
// console.log(letter)
// console.log(no)


// Join IM
// let letter = ['a', 'b', 'c'] 
// let newArr = letter.join('-')
// console.log(letter)
// console.log(newArr, typeof newArr)


// slice IM 
// let arr = [1, 2, 3, 4, 5, 6, 7]
// let sliced1 = arr.slice(1, 3) // returns index 1 to 2. The last argument value is excluded
// let sliced2 = arr.slice(1) // returns index 1 to end of array
// let sliced3 = arr.slice(-3) // returns last 3 elements
// console.log(arr)
// console.log(sliced1, sliced2, sliced3)


// Splice M replaces and removes array index
// Syntax Array.splice(index, no of element to remove, add new value ...)
// let num = [1, 2, 3, 4, 5, 6, 7]
// let output = num.splice(1,1,6,9) // returns the deleted array
// let output1 = num.splice(1,0,6,9) // returns the deleted array
// console.log(num)
// console.log(output)
// console.log(output1)


// at IM can be used with strings // good for accessing elements in short and simple sintax
let val = [1, 2, 3, 4, 5, 6, 7]
console.log(val.at(-1))
console.log(val.at(2))