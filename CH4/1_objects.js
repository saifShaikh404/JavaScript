// Objects is a key value pair stores multiple data

const obj = {
    name: 'saif',
    age: 21,
    pass: 'saif@786'
}

// Access
// console.log(obj['name'])
// console.log(obj.age)

// difference
let objName = 'name'
// console.log(obj[objName]) // return obj name
// console.log(obj.objName) // throws undefined

// rewrite obj prop
obj.name = 'akif'
obj['age'] = 15
console.log(obj)

// add prop in obj
obj.uname = 'akif_shaikh'
console.log(obj)

// delete prop in obj
let deldata = delete obj.uname // returns true
console.log(obj, deldata)