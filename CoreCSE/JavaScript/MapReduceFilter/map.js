var a = [6,9,2,3];

// function callback(value, index, array){
//     return value+5;
// }

// var newArr = a.map(callback);

// console.log(a);
// console.log(newArr);




// var newArr = a.map(
//     function (val){
//         return val+5;
//     }
// );

// remove function keyword
// add => after parenthesis

// var newArr = a.map(
//     (val) => {
//         return val+5;
//     }
// );

var newArr = a.map(val => val*2);

console.log(newArr);

