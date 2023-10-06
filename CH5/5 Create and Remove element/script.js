// Removing element
let li = document.querySelectorAll('li')
console.log(li)

Array.from(li).forEach((ele) => {
    ele.addEventListener('click', (e) => {
        e.target.remove()
    })
})

// Adding Element
let addEle = document.querySelector('button')

addEle.addEventListener('click',()=>{
    let li = document.createElement('li')
    li.textContent = "I am newly created li"
    // document.querySelector('ul').append(li) // Add element at last
    document.querySelector('ul').prepend(li) // add element at top
})