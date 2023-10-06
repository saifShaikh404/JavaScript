let openingHours = {
    monday: { open: "09:00AM", close: "06:00PM" },
    wednesday: { open: "11:00AM", close: "09:00PM" },
    friday: { open: "10:00AM", close: "07:00PM" },
    saturday: { open: "09:00AM", close: "06:00PM" },
}

// Object is a constructor ands keys is method
let keyArr = Object.keys(openingHours)
console.log(keyArr);

let valArr = Object.values(openingHours)
console.log(valArr);

let keyVal = Object.entries(openingHours)
console.log(keyVal);

for(let [key,{open, close}] of keyVal){
    console.log("In " + key + " we open at " + open + " and close at " + close);
}

// same loop as above
// for(let [key,vals] of keyVal){
//     console.log("In " + key + " we open at " + vals.open + " and close at " + vals.close);
// }