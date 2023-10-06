// Falsy Values => 0, false, null, undefined, '' (empty string)

// AND (&&) operator (Output true if all input true)
let res1 = "" && "True"
let res2 = "true" && "second True"
let res3 = 0 && null
let res4 = "True" && null
let res5 = "True" && 0 && "Another True"

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);


// OR (||) Operator (Output true if any given input true)
let or1 = "true" || "again true"
let or2 = "" || "True"
let or3 = null || null || "third"
let or4 = "True" || 0
let or5 = "" || 0

console.log(or1);
console.log(or2);
console.log(or3);
console.log(or4);
console.log(or5);
// As || operator find first output true. It simply returns that true value and does not move towards next operands


// For nullish coalesing operator (??) only "null" and "undefine" are Falsy Value
let guests = 0
let result = guests ?? 10
console.log(result); // 0 is not a nullish value

let guest = null
let res = guest ?? 10
console.log(res);
// It return First non-nullish value