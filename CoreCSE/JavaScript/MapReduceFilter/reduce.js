a = [6,9,2,3];

// function callback(accumulator, val, index, arr){
//     return accumulator + val;
// }

// var newVar = a.reduce(callback);

// var newVar = a.reduce((acc, val) => acc+val);

// console.log(a);
// console.log(newVar);

var arr = [1,2,3,4,5,6,7,8,9,10];

var result = arr // [1,2,3,4,5,6,7,8,9,10]
            .map(item => item+5) // [6,7,8,9,10,11,12,13,14,15]
            .filter(item => item%2==0) // [6,8,10,12,14]
            // 0 1 2 3 4
            .map((id, val) => val+5) // [5,6,7,8,9]
            .filter(id => id==5) // [5]
            .reduce((acc, item) => acc + item); // 5


console.log(result);
