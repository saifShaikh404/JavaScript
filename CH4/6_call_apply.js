// call function is used to take one object reference to another

let mainAir = {
    nameAirlines: "Indian Airlines",
    code: "IF32",
    bookings: [],
    book: function(name, planeNum){
        console.log(`Hello ${name} Thanks for using ${this.nameAirlines} Your booking confirmed with ${planeNum} code ${this.code}`)
        this.bookings.push({
            personName: name, 
            nameAirlines: this.nameAirlines,
            code: this.code,
            flightNo: planeNum
        })
    }
}

let subAir = {
    nameAirlines: "Gujarat Airlines",
    code: "IF32",
    bookings: []
}

mainAir.book('Saif',115246)
console.log(mainAir.bookings)

subAir.book = mainAir.book
subAir.book("Asheer", 524162)
console.log(subAir.bookings)

// Call - Method 1
// let callFun = mainAir.book
// callFun.call(mainAir, "Akif", 114528) // Add value in booking
// console.log(mainAir.bookings) 

// Call - Method 2
// mainAir.book.call(subAir, "Shaikh Saif", 696954) // Call book function in subAir obj and add entries to the booking array
// console.log(subAir.bookings) 

// apply - similar to call only difference is take arguments as an array
// let callFun = mainAir.book
// callFun.apply(mainAir, ["Akif", 114528]) // Add value in booking
// console.log(mainAir.bookings)