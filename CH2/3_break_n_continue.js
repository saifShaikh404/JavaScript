// Continue skip one or more iteration depends on condition
for(let i = 0;i < 5;i++){
    if(i == 2){
        continue
    }
    console.log('I is ' + i)
}

//Break exits the loop
for(let i = 0;i < 10;i++){
    if(i == 5){
        break
    }
    console.log(i)
}