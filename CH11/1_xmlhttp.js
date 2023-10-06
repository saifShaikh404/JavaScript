// https://jsonplaceholder.typicode.com/todos/

// network calls are mostly asynchronus
// Making http request 
let fth = new XMLHttpRequest();

// send or get data from this event listener
// Runs when the state is changed
fth.addEventListener("readystatechange",() => {
	console.log(fth, fth.readyState);
	if(fth.readyState === 4){
		console.log(fth.responseText);
	}
})


// Set up the request
fth.open("Get", "https://jsonplaceholder.typicode.com/todos");

// Sending the request
fth.send();

// XMLHttpRequest is used to call httprequest from the server to get and post data


// Status code
// Informational response (100 - 199)
// Successful response (200 - 299)
// Redirectional messages(300 - 399)
// Client error response (400 - 499)
// Server error response (500 - 599)

// value , state, descrption
// 0 - UNSENT - Client has been created. open() not called yet
// 1 - OPENED - open() has been called
// 2 - HEADERS_RECEIVED - send() has been called and headers
// 3 - LOADING Downloading - responseText holds partial data.
// 4 - DONE - The operation is complete