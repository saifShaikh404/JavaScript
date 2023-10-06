// bind works similar to call, and apply

function greet(){
    console.log(`Hello ${this.fname} ${this.lname} Have a great day`)
}

let fullname = {
    fname: "Saif",
    lname: "Shaikh"
}

let greetMsg = greet.bind(fullname)
greetMsg()