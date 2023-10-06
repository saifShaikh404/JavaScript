// 10.5 getter and setter function 
// Getters and Setters allow you to define Object Accessor(Computed Properties)
// Executes as a property instead of method..
class Sub {	
	constructor(lang1, lang2, lang3, lang4){
		this.lang1 = lang1;
		this.lang2 = lang2;
		this.lang3 = lang3;
		this.lang4 = lang4;
	}
	
	preview(){
		console.log(this.lang1 + ", " + this.lang2 + ", " + this.lang3 + " and " + this.lang4)
	}
	
	get getVal(){
		console.log(`This is getVal Function Value :-  ${this.lang1}, ${this.lang2}, ${this.lang3} and ${this.lang4}`)
	}
	
	set setVal(lang){
		this.lang1 = lang[0]
		this.lang2 = lang[1]
		this.lang3 = lang[2]
		this.lang4 = lang[3]
	}	
}

let stud1 = new Sub("JAVA", "Python", "C language", "Ruby")
stud1.preview() // Executes as a function
stud1.setVal = ["JavaScript", "C++", "PHP", "C#"] // Executes as a property
stud1.getVal // Executes as a property 