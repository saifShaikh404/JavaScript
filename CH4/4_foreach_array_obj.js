// Foreach is a method of array
// Its another type of loop which we used to traverse over the array

let arr = [1, 2, 3, 4, 5, 6, 7]

// using for loop
// for(let i = 0;i < arr.length;i++){
//     console.log(arr[i])
// }

// Using for Each loop
// arr.forEach(function(ele){
//     console.log(ele)
// })


// Array obj
let objArr = [
    {
        name: 'saif',
        age: 22
    },
    {
        name: 'akif',
        age: 15
    },
    {
        name: 'altamas',
        age: 21
    }
]

//using for loop
for(let i = 0;i<objArr.length;i++){
    console.log(`Hello ${objArr[i].name} Your age is ${objArr[i].age}`)
}

// Using For Each loop
objArr.forEach((ele)=>{
    console.log(ele.name, ele.age)
})