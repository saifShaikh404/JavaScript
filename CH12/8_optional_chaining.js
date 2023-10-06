let obj = {
    openingHours: {
        monday: { open: "09:00AM", close: "06:00PM" },
        wednesday: { open: "11:00AM", close: "09:00PM" },
        friday: { open: "10:00AM", close: "07:00PM" },
        saturday: { open: "09:00AM", close: "06:00PM" },
    }
}

// Optional chaining Before ES6
if (obj.openingHours.sunday) {
    console.log(obj.openingHours.sunday.open);
}
else {
    // console.log(obj.openingHours.monday.open);
}

// Optional chaining after ES6
// return null or undefined instead of array
console.log(obj.openingHours?.sunday?.open);
console.log(obj.openingHours?.monday?.open);