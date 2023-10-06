// Map IM do some operation on every single element in given array and then return new array
// let salaries = [2500, 5100, 10000, 3000, 8000]
// let newSalaries = salaries.map((salary) => {
//     let bonus = salary / 2
//     return salary + bonus
// })
// console.log(salaries)
// console.log(newSalaries)


// Filter IM return copy of existing array based on condition
// let arr = [50, 52, 36, 96, 42, 71, 88, 69]
// let newArr = arr.filter((ele) => {
//     return ele % 3 == 0
// })
// console.log(arr)
// console.log(newArr)


// reduce IM method
// Run Reducer function for each array Element, It returns single value
// Syntax :- Array.reduce(function(total, currentValue),initialVal)
// The total value is initialVal and the currentValue is an array
// Code
//  let nums = [1,2,3,4,5]
// let factorial = nums.reduce((total, currentValue) => {
// 	return total * currentValue;
// }, 1)
// console.log(factorial) 


// find IM method
// return the first array element which matches the conditon, if there is no array matches the condition returns undefined 
// if there is multiple array who matches the same condition then return the first matched array
// Code
/* let arrObj = [{id: 1, name: 'saif'},
			  {id: 2, name: 'akif'},
			  {id: 3, name: 'arbaz'},
			  {id: 1, name: 'altamas'}]
let obj = arrObj.find((arr) => {
	return arr.id === 1
})
console.log(obj) */


// findIndex IM method
// Similar to Find method the only difference is instead of returning array it returns it index and if the conditon didn't match return -1
// Code
/* let arrObj = [{id: 1, name: 'saif'},
			  {id: 2, name: 'akif'},
			  {id: 3, name: 'arbaz'},
			  {id: 1, name: 'altamas'}]
let obj = arrObj.findIndex((arr) => {
	return arr.id === 2
})
console.log(obj) */ 


// chaining methods 
//  let arr = [1, 2, 3, 4, 5]
// let newArr = arr.slice(0, 3).splice(1, 1, 7).push(5)
// console.log(newArr, arr) 