// some and every IM method
// 'some' method returns true if one of the element matches the condition else false
// 'every' method returns true if all the element matches the condition else false
// it returns boolean value and its similar to OR(||) and AND(&&)
//some method Code
/* let val1 = [20,33,47,82,36]
let some = val1.some((arr) => {
	return arr > 50
})
console.log('Some Method ', some) */
// every method Code
/* let val2 = [20,33,47,82,36]
let every = val2.every((arr) => {
	return arr > 21
})
console.log('Every Method ', every) */


// flat IM Method
// It creates a new array with the elements of the subarray "concatinated" into It
// Code
/* let arr = [1, 2, 3, [4,5,6,[7,8,9]]]
console.log("before flat ", arr)
let flat1 = arr.flat() // by default value 1(depth value) 
let flat2 = arr.flat(2) // by default value 1(depth value) 
console.log(flat1, flat2) */


// flatMap IM Method
// It is combination of the 'map()' method followed by the 'flat()' method of depth 1
// Code
/* let arrObj = [{id:1, item:'Mobile', price: 18000},
			  {id: 2, item: 'fridge', price: 20000}]
let newArr = arrObj.map((arr) => {
	if(arr.id === 1){
		return [arr,{id: 3, item: 'case', price: 0}]
	}
	else{
		return [arr]
	}
})
console.log(newArr.flat()) */
// if you wanna see the difference between flatArr and map then put map method inside newArr and add flat method at console with the result


// sorting array M Method
// By default method is used to sort strings . It firstly convert everything into string and then start sorting
// String Code
let str = ['a','z','x','y','c','b'];
let str2 = ['abc','zyx','xyz','yzx','cab','bac'];
str.sort();
str2.sort();
console.log(str, str2);
// Int Code
let num1 = [5, 22, 36, 45, 69, 12, 49];
let num2 = [-5, -22, 36, 45, 69, 12, 49];
num1.sort(); // convert value into string
num2.sort(); // returns unexpected result also a false method
console.log(num1);
console.log(num2);
// correct method for int
let num3 = [-8, -2, -9, 2, 60, 58, 29, 25, 36];
num3.sort((a, b) => {
	// return a-b // ascending short method
	// return b-a // decending short method
	// explanation
	if(a < b){
		return -1; // returns false
	}
	if(a > b){
		return 1; // returns true
	}
})
console.log(num3); // correct method