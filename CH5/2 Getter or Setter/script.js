// innerText vs innerHTML

// innerText - Retrieve only text inside from the element ignores extra spaces
// let content = document.querySelector('.content')
// console.log(content.innerText)
// content.innerText = "I am changed now"

// innerHTML - Retrieve whole html inside from element including html tags,  attributes, extra spaces
// let content = document.querySelector('.content')
// console.log(content.innerHTML)
// content.innerHTML = "<h3> I am H3 now</h3>"


// Get and Set Attribute
// let link = document.querySelector('a')
// console.log(link.getAttribute('href'))
// link.setAttribute('href','www.facebook.com')
// console.log(link.getAttribute('href'))


// Adding style in Html - it use camelCase instead of (-)

// let h1 = document.querySelector('h1')
// h1.style.color = "green"
// h1.style.backgroundColor = "gray"


// Add, Remove, Replace class
let h4 = document.querySelector('.h4')

// Add class
h4.classList.add('new')

// Remove class
h4.classList.remove('new')

// Replace class
h4.classList.replace('h4','new')