// 10.6 Static Method
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
}
// Static Method
Sub.result = function(){
	console.log("Static Method")
}

let stud1 = new Sub("JAVA", "Python", "C language", "Ruby")
stud1.preview()
Sub.result()
// stud1.result() // Throws error