// Maps
// Special type of data structure similar to hash Map
let rest = new Map();

// setting value in map
rest.set("name", "Shaikh Saif")

// map chaining
rest.set(2, "Number Two").set(true, "This is true").set(false, "This is False")

// throws error
// rest.set(age, 21)

console.log(rest);
console.log(rest.get(true), rest.get(false), rest.get("name"), rest.get(2));
console.log(rest.size); // length of Map