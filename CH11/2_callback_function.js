// It runs asynchronusly

let todos = function(callBack){

	let fth = new XMLHttpRequest();
	fth.addEventListener("readystatechange",() => {
		if(fth.readyState === 4 && fth.status === 200){
			callBack(fth.responseText, null);
		}
		else if(fth.readyState === 4){
			callBack(null, "Some Error Occured");
		}
	})

	fth.open("Get", "https://jsonplaceholder.typicode.com/todos");
	fth.send();
}

// here we passing callback function for performing an extra actions
todos((success, error) => {
	if(success){
		console.log("Request Success", success);
	}
	else{
		console.log(error);
	}
})