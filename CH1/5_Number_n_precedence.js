let score = 50
// console.log(score, typeof score)

// Arithmetic operators +, -, *, /, **, %
let num = score / 2
let no = score % 2
// console.log(num, no)

//Priority and Precedence
// 1. () Brackets
// 2. ** Power Operator
// 3. * / % (From left to right)
// 4. + - (From left to right)

let result = score * 2 + (4 * 3) - 8 / 2 % 4
console.log(result)

// Number convert to string automatically
let numStr = "Hello " + score
console.log(numStr)