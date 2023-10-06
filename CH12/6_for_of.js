let arr = ["item1", "item2", "item3", "item4", "item5"]

for(let item of arr){
    // console.log(item);
}

// IF we want both index and value
for(let item of arr.entries()){
    // console.log(`${item[0]+1} : ${item[1]}`);
}

// For of loop using destructure
for(let [i, item] of arr.entries()){
    // console.log(`${i + 1} : ${item}`);
}

let arr2 = [
                {item:"item1", no: 1},
                {item:"item2", no: 2},
                {item:"item3", no: 3},
                {item:"item4", no: 4},
                {item:"item5", no: 5}
            ]

for(let [sr, i] of arr2.entries()){
    console.log(sr, i.item, i.no);
}

// for(let i of arr2.entries()){
//     console.log(i[0], i[1].item, i[1].no);
// }