// function outer(){
//     var temp = 6;
//     function inner(x){
//         return x+temp;
//     }
//     return inner;
// }

// var result = outer();
// console.log(result(4));


// Q1
// let,var,const
// scope
// hoisting
// closure

// NaN - Not A Number

var global = 10;
function outer(y){
    const pi = 3.14;
    function inner(x){
        console.log(p + pi); // undefined + 3.14
        if(true){
            var p = 50;
        }

    }
    let temp = 20;
    inner(100);
}
outer(40);