// Variable "declaration" are "hoisted" toward top of their scope

// var 
/* console.log(num) //return undefined
 var num = 10; */
/* num = 10
console.log(num) // this will return 10
var num; */

// let & const
// console.log(num) // Both let and const throw error
// let num = 10;

// Normal Function 
// All the normal function hoisted top
/* msg() // it will work
function msg(){
    console.log('msg')
} */

// Function expression
// They throw error if we called it before declaration
sum()
/* let sum = function(){
    console.log('Hello')
} */
/* const sum = function(){
    console.log('Hello')
} */
var sum = function(){
    console.log('Hello')
}