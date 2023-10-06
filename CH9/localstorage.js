// Hint: use DOM for results

// local storage - Store data in a browser permanantly

// set Item
// localStorage.setItem('One', 'I am one')
// localStorage.setItem('Two', 'I am Two')
// localStorage.setItem('Three', 'I am Three')

// get Item
// console.log(localStorage.getItem('One'))

// update Item
// localStorage.setItem('One', 'I am updated one') // overwrite the previous value
// console.log(localStorage.getItem('One'))

// delete Item
// localStorage.removeItem('Three')
// console.log(localStorage)

//clear all 
localStorage.clear()
console.log(localStorage)

// localStorage with JSON(JavaScript Object Notation) 
let nameArr = [{name: 'John',age: 21},
			  {name: 'Doe',age: 15}]
let jsonStr = JSON.stringify(nameArr)
localStorage.setItem('name', jsonStr)
let retriveJSONData = localStorage.getItem('name')
let retriveData = JSON.parse(retriveJSONData)
console.log(retriveData)



// API practice with dom
// ext api https://fakestoreapi.com/products
// ext api https://jsonplaceholder.typicode.com/todos/
// fetch('https://jsonplaceholder.typicode.com/todos/')
//       .then(response => response.json())
//       .then(data => {
// 		  console.log(data)
// 			for(let i = 0; i < data.length; i++){
// 				document.body.innerHTML += `<div>User Id:- ${data[i].id} <br>Title:- ${data[i].title} <br>Price:- ${data[i].price} <br>Description:- ${data[i].description} <br>Category:- ${data[i].category} <br>Image:- <img src ='${data[i].image}'> </div> <br><br>`
// 			}
// 		})