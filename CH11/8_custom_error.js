// we can throw our custom error using throw new Error() keyword

let todos = async() => {
    let res = await fetch("datsa.json")
    if(res.status !== 200){
        throw new Error("Error Occured")
    }
    let data = await res.json()
    return data
}

todos().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err.message);
})