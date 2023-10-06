let str = "   coding Reading running   ";

// case sensitive
console.log(str.toUpperCase()) //IM
console.log(str.toLowerCase()) //IM
console.log(str.indexOf("R"))
console.log(str.indexOf("z")) // Returns -1 means false string doesn't exist
console.log(str.lastIndexOf("c"))
console.log(str.trim()) //IM
console.log(str.includes("read")) //returns boolean

let prog = "wowProgrammer"
console.log(prog.slice(0,5)) // IM 0-4 Excluding last one

let hobb = "hello hi how are you"
console.log(hobb.split(" ")) //IM convert string to array