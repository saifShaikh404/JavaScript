// Number to string (Every number convert to string)
let num = 50
num = String(num)
console.log(num, typeof num)

// String to Number (Only valid string can convert to number otherwise it returns NaN(Not a Number))
// let str = "52"
let str = "52a"
str = Number(str)
console.log(str, typeof str)

// Boolean returns false if NULL,undefined,number is 0 and string is ""
let age = 32
// let age = 0
// let age = null
// let age
// let age = ""
// let age = "18"
let ageChk = Boolean(age)
console.log(ageChk, typeof ageChk)