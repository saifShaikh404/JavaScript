// scope --> Area where variable is defined or accessible
// note - let and const works similar only exception is you cant change the const


let no = 50 // Global scope

if(true){
    // if variable is already declared in the global scope the console still take the variable inside the scope for eg if let no is 50 global and let no 30 block scope the console will print no 30 inside the block scope

    // let no = 30 // Block scope cant be accessible outside the block
    
    no = 22 //overwrite the global scope
    console.log(no)
}