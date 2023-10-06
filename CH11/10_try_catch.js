// try catch is good practice for coding and catching error
let todos = async() => {
    try{
        
        let res = await fetch("data.json")
        let data = await res.json()
        console.log(data);
        
        let res1 = await fetch("data1.json")
        let data1 = await res1.json()
        console.log(data1);
        
        let res2 = await fetch("data2.json")
        let data2 = await res2.json()
        console.log(data2);

    }catch(err){
        console.log(err.message)
    }
}

todos()