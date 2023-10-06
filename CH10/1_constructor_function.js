// Object Oriented Programming
// Constructor function and the 'new' operator. We cannot use 'arrow' function as Constructor. Call Constructor using 'new' keyword

// Constructor 
// A constructor function is used to create objects
// To create an object from a constructor function, we use the new keyword.
// Code

let Sub = function(name1, name2, name3){
	// Properties
	this.sub1 = name1
	this.sub2 = name2
	this.sub3 = name3
	// console.log(this.sub1, this.sub2, this.sub3) // For method 1
}
// Calling Constructor 
// new Sub('Maths', 'Science', 'SS') // Method 1
let student1 = new Sub('Hindi', 'Math', 'English') // student1 is instance and new sub() is Constructor
console.log(student1) // returns the object