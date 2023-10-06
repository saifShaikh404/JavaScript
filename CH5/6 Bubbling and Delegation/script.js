
// Adding Element
let addEle = document.querySelector('button')

addEle.addEventListener('click',()=>{
    let li = document.createElement('li')
    li.textContent = "I am newly created li"
    // document.querySelector('ul').append(li) // Add element at last
    document.querySelector('ul').prepend(li) // add element at top
})

// Bubbling - its the flow of event (child to parent and so on)
// Removing element
// In this eg the output first show the li and then ul

// let ul = document.querySelector('ul')
// ul.addEventListener('click',()=>{
// console.log('Ul clicked')
// })

// let li = document.querySelectorAll('li')
// console.log(li)

// Array.from(li).forEach((ele) => {
//     ele.addEventListener('click', (e) => {
//         e.target.remove()
//         console.log('Li clicked')
//     })
// })


// Delegation

let ul = document.querySelector('ul')
ul.addEventListener('click',(e)=>{
    console.log(e.target)
    if(e.target.nodeName == "LI"){
        e.target.remove()
    }
})