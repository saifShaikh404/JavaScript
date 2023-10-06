// 10.3 Prototypical inheritance
let Sub = function(name1, name2, name3){
	this.sub1 = name1
	this.sub2 = name2
	this.sub3 = name3
}
Sub.prototype.result = function(){
	console.log('pass')
}
let student1 = new Sub('Hindi', 'Math', 'English')
student1.result() 
console.log(student1, student1 instanceof Sub)
console.log(student1.__proto__.isPrototypeOf(student1)) // returns true if the prototype is available in constructor
console.log(Sub.prototype.isPrototypeOf(Sub)) // Returns false because thee proto is inside it . It is constructor on its own

let arr = [2,3,4,5] // [] is same as new Array([]) (inbuilt)
console.log(arr.__proto__, Array.prototype)
console.log(arr.__proto__.__proto__)
console.log(arr.__proto__.__proto__.__proto__) // go until null
console.log(Object.__proto__)