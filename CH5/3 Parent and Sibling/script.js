// Accessing Childern from parent element

// let parent = document.querySelector('.parent')
// console.log(parent.children) // Its returns HTML collection of all children element

// We cannot run forEach Method on HTML collection So first convert it to Array

// Array.from(parent.children).forEach((ele) => {
//     ele.classList.add('new')
// })



// Accessing Parent from Children
// let h5 = document.querySelector('h5')
// console.log(h5.parentNode)

// Accessing Siblings
let h5 = document.querySelector('h5')
console.log(h5.nextElementSibling)
console.log(h5.previousElementSibling)