// Adding Events in Element

// let btn = document.querySelector('button')

// console.log(btn)
// btn.addEventListener('click',()=>{
//     console.log('Button Clicked')
// })


// Adding Events in list item
// let li = document.querySelectorAll('li')
// console.log(li)

// Array.from(li).forEach((ele) => {
//     ele.addEventListener('click', (e) => {
//         // e is the event object created by the browser.
//         console.log(e.target)
//         e.target.style.color = 'red'
//     })
// }) 


// More events 
// Copy
let li = document.querySelectorAll('li')
Array.from(li).forEach((ele) => {
    ele.addEventListener('copy',() => {
        alert("Oooi!! You cant copy this")
    })
})

// Mousemove 
let box = document.querySelector('.box')

box.addEventListener('mousemove', (e) => {
    console.log(e.offsetX, e.offsetY)
})