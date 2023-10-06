// Special type of loop used for objects

let obj = {
    name: 'saif',
    age: 22,
    hobby: 'Gaming'
}

for(let key in obj){
    console.log(key + ' is ' + obj[key])
}