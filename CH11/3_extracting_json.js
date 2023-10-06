let todos = function(callBack){

	let fth = new XMLHttpRequest();
	fth.addEventListener("readystatechange",() => {
		if(fth.readyState === 4 && fth.status === 200){
			// JSON.parse() is used to parse json data
			// JSON.stringify() is used to convert data into json string
			let data = JSON.parse(fth.responseText);
			callBack(data, null);
		}
		else if(fth.readyState === 4){
			callBack(null, "Some Error Occured");
		}
	})

	fth.open("Get", "data.json");
	fth.send();
}

todos((success, error) => {
	if(success){
		console.log("Request Success", success);
	}
	else{
		console.log(error);
	}
})