// Function is a piece of code which we can use in our program many times
// It is just like some variable holding piece of code

// Method 1
// function check(){
//     console.log('Hello World')
// }
// check()

// Method 2 Function expression Latest method mostly preferred 
// let fun = function(){
//     console.log("Hello world 2")
// }
// fun()

// Parameter and arguments
// function age(birthyear){
//     let age = 2023 - birthyear
//     console.log(age)
// }
// age(2001)

// Default parameter
// function age(birthyear, currYear = 2023){
//     let age = currYear - birthyear
//     console.log(age)
// }
// age(2001)

// return
function age(year){
    let age = 2023 - year
    return age
}

let res = age(2001)
console.log(`age is ${res}`)