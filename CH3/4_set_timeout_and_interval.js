// setTimeout and setInterval are callback functions runs Asynchrously

// setTimeout syntax = setTimeout(function, delay, arg1, arg2, ...)
function msg(name){
    console.log('Hello world ' + name)
}
setTimeout(msg, 5000,'Saif');

// setInterval syntax = setInterval(function, delay, arg1, arg2, ...)
setInterval(msg, 1000,'Saif');