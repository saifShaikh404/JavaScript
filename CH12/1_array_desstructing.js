// https://codepen.io/RaduBratan/pen/GRoryXm
// https://codepen.io/crianbluff/pen/PMZBVJ
// HOK PURPLE THEME

// ES6 - Array Destructing
let arr = [1, 2, 3]


let [p, q, r] = arr
console.log(p, q, r);

let [, a, c] = arr
console.log(a, c);

/* ****************---****************** */

// Swapping value without destructuring 
// let temp = a
// a = c
// c = temp
// console.log(a, c);

//Swapping value with destructuring
// [a,c] = [c,a]
// console.log(a,c)

/* ****************---****************** */

// Nested array
let nesArr = [2, 3, [4, 5]]
let [x, , [y, z]] = nesArr
console.log(x, y, z);