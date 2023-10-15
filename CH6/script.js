let form = document.querySelector('.myForm')
// RegEx
let passCondition = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"; // checks atleast 1 capital, small and number

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // console.log(form.email.value, form.password.value) // Accessing value by name
    // console.log(form.emailId.value, form.pass.value) // Accessing value by id
    let pass = form.password.value.match(passCondition) // there is also a test() method which returns boolean and also values comes inside the method and regex comes before test()
    if(pass){
        console.log("condition is right")
    } else {
        console.log("condition is wrong")
    }
})