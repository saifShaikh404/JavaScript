//let newDate = new Date() // returns current Date
// console.log(newDate)

// let newDate = new Date(22, 2, 25) // returns the Date we entered make sure to put years in 4 digits otherwise its gonna return date from 20th century also month starts with 0 - 11
// console.log(newDate)

//let newDate = new Date(0) // returns the Date of it creation in miliseconds
//console.log(newDate)

// let newDate = new Date(86400000) // returns the Date one day after of it creation in miliseconds
// console.log(newDate)

// let newDate = new Date().getTime() // return millisecond from 1970 to current time
// console.log(newDate)


// Accessing Date and Time
// let getDate = new Date(80,2,24,11,8,4) // Year, Month, Date, Hour, Minute, Second

// get Full year
// console.log(getDate.getFullYear())

// get Month
// console.log(getDate.getMonth()) // 0 - 11 index of month

// get Day
// console.log(getDate.getDay()) // 0 - 6 index of Week

// get Date
// console.log(getDate.getDate())

// get Hours
// console.log(getDate.getHours()) 

// get Minutes
// console.log(getDate.getMinutes())

// get Second
// console.log(getDate.getSeconds()) 

/* setInterval(() => {
	let curTime = new Date()
	let hours = curTime.getHours() % 12;
	let minutes = curTime.getMinutes()
	let seconds = curTime.getSeconds()
	console.log(`Time is ${hours} : ${minutes} : ${seconds}`)
}, 1000) */