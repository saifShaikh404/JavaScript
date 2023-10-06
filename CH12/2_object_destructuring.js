// ES6 - object Destructing

let hotel = {
    name: "howtell",
    locate: "Street no. 369 Mumbai",
    categories: ["chinese", "italian", "english"],
    mainMenu: ["FoodA", "FoodB", "FoodC"],
    openingHours: {
        sunday: { open: "09:00AM", close: "11:00PM" },
        monday: { open: "10:00AM", close: "10:00PM" }
    }
}

// Value of variable must same as keys otherwise shows undefined
let { name, locat, categories } = hotel
console.log(name, locat, categories);

// Set customize name to Object properties
let { name: hotelName, locate: hotelLocation, categories: langCategories } = hotel
console.log(hotelName, hotelLocation, langCategories);

// Setting Default Values
let { name: hName, loc: loct = "default", mainMenu = [] } = hotel
console.log(hName, loct, mainMenu);


// Accessing Nested objects Value
// For openingHours value
let { openingHours } = hotel
console.log(openingHours);
// For monday and sunday value from openingHours onj
let { monday, sunday } = openingHours
console.log(monday, sunday);
// For open, close value from monday, sunday obj
let { open, close } = monday
console.log(open, close);

// one liner method
let { openingHours: { sunday: { open: sOpen, close: sClose }, monday: { open: mOpen, close: mClose } } } = hotel
console.log(sOpen, sClose, mOpen, mClose)