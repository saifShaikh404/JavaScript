// async await always return promise. Its run asynchronusly 
// await keyword blocks the code execution. Inside the function only

let todos = async() => {
    let res = await fetch("data.json")
    let data = await res.json()
    return data
}

console.log(1);
todos().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log("Error occured", err);
})
console.log(2);