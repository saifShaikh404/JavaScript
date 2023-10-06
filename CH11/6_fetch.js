// Unlike XMLHttpRequest that is a callback-based API, Fetch is promise-based
// The fetch() method in JavaScript is used to request data from a server. The request can be of any type of API that returns the data in JSON or XML. The fetch() method requires one parameter, the URL to request, and returns a promise.

//Parameters: This method requires one parameter and accepts two parameters:
// URL: It is the URL to which the request is to be made.
// Options: It is an array of properties. It is an optional parameter.

// NOTE: Without options, Fetch will always act as a get request.

fetch("data.json").then((res) => {
    console.log(res)
    return res.json()
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})