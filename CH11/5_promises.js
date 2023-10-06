// The solution of callback hell is promises.
// Promise is a "promise of code execution". The code either execute or fails, in both the cases the subscriber will be notified

//resolve and reject are two callbacks provided by javascript itself. they are called like this:
// resolve(value) === If the job is finished successfully
// reject(error) === If the job failed

// A Promise is in one of these states:
// pending === initial state, neither fulfilled nor rejected.
// fulfilled === meaning that the operation was completed successfully.
// rejected === meaning that the operation failed.

let todos = function(url){

    return new Promise((resolve, reject) => {

        let fth = new XMLHttpRequest();
        fth.addEventListener("readystatechange",() => {
            if(fth.readyState === 4 && fth.status === 200){
                let data = JSON.parse(fth.responseText);
                resolve(data)
            }
            else if(fth.readyState === 4){
                reject("Some error occured")
            }
        })

        fth.open("Get", url);
        fth.send();

    })

}

// todos("data.json").then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })


// Chaining of Promises
todos("data.json").then((data) => {
    console.log(data);
    return todos("data1.json")
}).then((data) => {
    console.log(data);
    return todos("data2.json")
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})
// The problem here is if the one request fails then all the other request are stop executing.