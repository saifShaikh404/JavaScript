let todos = function(url, callBack){

	let fth = new XMLHttpRequest();
	fth.addEventListener("readystatechange",() => {
		if(fth.readyState === 4 && fth.status === 200){
			let data = JSON.parse(fth.responseText);
			callBack(data, null);
		}
		else if(fth.readyState === 4){
			callBack(null, "Some Error Occured");
		}
	})

	fth.open("Get", url);
	fth.send();
    
}

// Callbacks Hell also known as pyramind of doom
// the problem of callbacks hell is code becomes unreadable 
todos("data.json", (success, error) => {
	if(success){
		console.log("Request Success", success);
	}
	else{
		console.log(error);
	}

    todos("data1.json", (success, error) => {
        if(success){
            console.log("Request Success", success);
        }
        else{
            console.log(error);
        }

        todos("data2.json", (success, error) => {
            if(success){
                console.log("Request Success", success);
            }
            else{
                console.log(error);
            }
        })
    })
}) 