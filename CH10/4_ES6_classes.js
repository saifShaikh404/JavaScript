// 10.4 ES6 classes
// Classes are not hoisted
// Classes are also first class citizen(Pass as an argument or return)
// Classes are executed in strict mode

class Sub {	
	constructor(name1, name2){
		this.sub1 = name1;
		this.sub2 = name2;
	}
	
	// Methods can be created by prototype
	preview(){
		console.log(this.sub1 + " and " + this.sub2)
	}
}

// Creating method with old style
Sub.prototype.marks = function(){
	console.log(`Your marks in ${this.sub1} is 36`)
}

console.log(Sub.prototype)
let stud1 = new Sub("JAVA", "Python")
console.log(stud1.__proto__)
console.log(stud1.__proto__.isPrototypeOf(stud1))
stud1.preview()
stud1.marks() 