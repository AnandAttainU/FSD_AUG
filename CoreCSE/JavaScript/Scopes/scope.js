let a = 10; // Global scope

function abc() {
    let b = 20;
    // console.log(a);
    // console.log(b);
    // console.log(c);
    if(true){
        let e = 25;
    }
    console.log(e);
}
// let, var, const

if(true){
    let c = 30;
    // console.log(a);
    // console.log(b);
    // console.log(c);
    function pqr(){

    }
    {
        let d = 10;
    }
    // console.log(d);
}

abc();
// console.log(c);
// console.log(b);
// console.log(a);



