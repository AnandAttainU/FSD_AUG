var a = [6,9,2,3];

// function callback(value, index, array){
//     return value%3==0;
// }

// var newArr = a.filter(callback);

var newArr = a.filter((_val,id) => id%2==0);
// console.log(a);
console.log(newArr);