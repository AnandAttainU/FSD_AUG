// var arr = [1,6,5];
// // var a = arr[0];
// // var b = arr[1];
// // var c = arr[2];
// [a,c] = arr;
// // console.log(`${a},${b},${c}`);
// console.log(a,c);
// arr2 = [...arr]
// console.log(arr2);

// Objects
var obj = {
    a: 10,
    b: 20,
    c: 50
}

function fun(obj){
    // var p = obj.a;
    // var q = obj.b;
    // var r = obj.c;
    let {a,b,...obj2} = obj;
    newName = obj2.c;
    console.log(newName);
}

fun(obj);

// var arr = [1,4,8]
// [a,b,c] = arr;
// console.log(a,b,c);

