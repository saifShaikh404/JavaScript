// Prototype 
// Each object created by "constructor" function have an access to all "methods" present inside that "constructor" Prototype
// We can create both properties and methods using prototype but it mostly preferred for creating "methods"
let Sub = function(name1, name2, name3){
	this.sub1 = name1
	this.sub2 = name2
	this.sub3 = name3
}
console.log(Sub.prototype) 
Sub.prototype.result = function(){
	console.log('pass')
}
console.log(Sub.prototype) // Checking Prototype
let student1 = new Sub('Hindi', 'Math', 'English')
console.log(student1.__proto__) // Checking Prototype of this instance
student1.result() // Using Prototype
console.log(student1)