// Enhanced Object Literals
// Before ES6 keys
// let hobbies = {
//     hobby: ["nothing"]
// }

// let obj1 = {
//     name: "saif",
//     age:18,
//     hobbies:hobbies
// }
// console.log(obj1);

// After ES6
// let hobbie = {
//     hobby: ["nothing"]
// }

// let obj2 = {
//     name: "saif",
//     age:18,
//     hobbie
// }
// console.log(obj2);

/* ----------|----------|----------|--------- */

// Before ES6 functions
let obj3 = {
    name: "Nothing",
    age: 0,
    order: function () {
        console.log("Nothing here as Well");
    }
}
console.log(obj3);

// After ES6 functions
let obj4 = {
    name: "Nothing",
    age: 0,
    order() {
        console.log("Nothing here as Well");
    }
}
console.log(obj4);

/* ----------|----------|----------|--------- */
// React
// Computed Property Names ES6
let menu = "mainMenu"
let obj = {
    name: "undefined",
    age: 0,
    [menu]: "This is Main menu"
}
console.log(obj); 