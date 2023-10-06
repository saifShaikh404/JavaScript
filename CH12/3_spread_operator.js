// IM method
// shallow copy === one level copy

let obj = {
    arr: ["one", "two", "three"]
}

let no = [1, 2, 3]
console.log(...no);

let num = [...no, 4, 5]
console.log(num);

let nums = [...obj.arr, ...no]
console.log(nums);

nums[0] = "ONE"
console.log(nums, obj.arr);

let str = "programming"
console.log(...str);