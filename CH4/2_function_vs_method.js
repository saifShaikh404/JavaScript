// Method -- It is nothing but object property(Key) holding Function as 'Value'

// Method eg
let person = {
    age: function(birthyear){
        return 2023 - birthyear
    }
}
console.log(person.age(2001))