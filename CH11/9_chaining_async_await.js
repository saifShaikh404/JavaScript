
let todos = async() => {
    let res = await fetch("data.json")
    let data = await res.json()
    console.log(data);

    let res1 = await fetch("data.json")
    let data1 = await res1.json()
    console.log(data1);

    let res2 = await fetch("data.json")
    let data2 = await res2.json()
    console.log(data2);
}

// we dont need to chain .then here
todos()