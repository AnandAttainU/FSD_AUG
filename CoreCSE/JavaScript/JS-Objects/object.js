obj= {
    a: 5,
    b: 10,
    c: 'hello'
}

// obj.c = "hello";
// obj.d = function(){console.log("doing nothing")}

// console.log(obj.d);

// key_arr = Object.keys(obj)
// console.log(key_arr);
// value_arr = Object.values(obj);
// console.log(key_arr);
// console.log(value_arr);
// for(i=0;i<key_arr.length;i++){
//     console.log(obj[key_arr[i]])
// }
// let temp = key_arr[0];
// // console.log(temp);
// console.log(obj[temp]);
// console.log(obj 'a');

for(item in obj){
    console.log(obj[item]);
}