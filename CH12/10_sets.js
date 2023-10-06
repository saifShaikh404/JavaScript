// Set returns unique value (no repeated value)
let arr = [0, 1, 2, 3, 4, 5, 4, 5]
let set = new Set(arr)
console.log(set);
console.log(set.size); // length of set
console.log(set.has(0)); // returns true if value exist
console.log(set.add(6)); 
console.log(set.delete(6));
console.log(set);

// Sets are iterable
for(let values of set){
    console.log(values);
}