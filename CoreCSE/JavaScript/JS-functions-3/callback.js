let fun = () => {
    a = 100;
    a += 5;
    return a--;
}

let fun2 = (fun) => {
    c = fun();
    console.log(c);
}
fun2(fun);


// let sum = (a,b) => a+b;
// console.log(sum(3,4));