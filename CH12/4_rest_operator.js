// IM method
// shallow copy === one level copy

let obj = {
    arr: {one:"no1",two:"no2",three:"no3"},
    arr1: {one:"no1",two:"no2",three:"no3"},
    arr2: {one:"no1",two:"no2",three:"no3"}
}

let numArr = [1, 2, 3, 4, 5, 6]
let [a, , ...restEle] = numArr
console.log(a, restEle);

let {arr, ...restArr} = obj
console.log(arr, restArr);
console.log(restArr.arr1);