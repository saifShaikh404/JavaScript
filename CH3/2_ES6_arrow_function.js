// Special Form of function expression. It allows us to write function more fast because
// No need to use function ketword
// No need to use paranthesis() in case of single parameter
// No need to use curly {} if single line of code in function
// No need to use return statement if single line code in function


//eg 1
// let fun = name => console.log(`hello ${name}`)
// fun('saif')

//eg 2
let hello = (name, day) =>{
    console.log(`Hello ${name} have a good ${day}`)
}
hello('saif', 'Morning')