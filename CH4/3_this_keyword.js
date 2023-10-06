// 1. This gives reference of the same object
// 2. In Each method We have an access of special keyword called "this" 
// 3. defination - 'this' keyword represents the object. "Calling" the "method" in which "this" is "present".

// eg 
let person = {
    fname: 'Saif',
    lname: 'Shaikh',
    city: 'Mumbai',
    summary: function(){
        console.log(`Hello ${this.fname} ${this.lname}!! Welcome to ${this.city}`) 
    }
}

person.summary()