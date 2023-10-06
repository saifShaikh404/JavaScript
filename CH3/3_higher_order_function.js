// Method 1  // Callbacks
function upperCase(str){
    return str.toUpperCase()
}

function lowerCase(str){
    return str.toLowerCase()
}

function msg(str, fun){
    return fun(str)
}

// console.log(msg("Hello HOW are You", upperCase))

// Method 2 // Closure
let comp = function(msg){
    return function(str){
        console.log(`${msg} and ${str}`)
    }
}

// access 1
// comp('Hello')('Hi')

// access 2
// let val = comp("Hello")
// val('Hii')


// Method 3
// IIFE(Immediately invoked Function Expression) Executes Only One
// When you put a nameless function inside () its became expression
(function(name){
    console.log("Hello " + name)
})('saif') // Work fine in console not here Dunno why