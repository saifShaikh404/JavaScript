let words = ['abc','efg','pqr','xyz']

// Accessing Array
// console.log(words)
// console.log(words[0])
// console.log(words[1])
// console.log(words[2])
// console.log(words[3])
// console.log(words[4])

// words[0] = "stu" //M
// console.log(words)


//Methods :-

console.log(words.join()) //IM Convert array to string
console.log(words.indexOf("abc")) // Case sensitive
let num = ["one", "two"]
console.log(words.concat(num)) // IM join to array
console.log(num.length)

//Mutator Methods
let no = [1, 2, 3]
console.log(no)
console.log(no.push(4)) // return new length of array but also add new element in array
console.log(no)
console.log(no.pop()) // remove the last element from the array and show the deleted array //err
console.log(no)