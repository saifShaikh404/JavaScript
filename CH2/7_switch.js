// switch similar to if-else the difference is its more readable
// note - always add break at the end of each case

let age = 18
switch(age){
    case 14:
        console.log('Not elegible')
        break
    case 18:
        console.log('eligible')
        break
    case 60:
        console.log('Too old')
        break
    default:
        console.log('Err')
}

