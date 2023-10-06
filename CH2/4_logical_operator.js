// && returns true if both the condition is true
// let age = 60
// if(age > 40 && age < 70){
//     console.log('Ok')
// }
// else{
//     console.log('not ok')
// }

// && returns true if one of the condition is true
// let age = 60
// if(age > 40 || age < 50){
//     console.log('Ok')
// }
// else{
//     console.log('not ok')
// }

// ! swap true to false and false to true
// let bool = false
// if(!bool){
//     console.log('its ok')
// }

// Priority
// 1. Not
// 2. &&, || (Left to right)
let res = true && true || false && !false
console.log(res)
// Explanation
// res = true && true || false && true // step 1
// res = true || false && true // step 2
// res = true && true // step 3
// res = true // step 4