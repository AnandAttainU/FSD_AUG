// console.log(sum)
// var sum = 20 + 40;


// var a = 10;
// function sum() {
//     console.log(a);
//     var a = 100;
// }
// sum();



// var a = 10;
// function sum() {
//     function sub(){
//         console.log(a);
//         a = 200;
//     }
//     var a = 100;
//     sub();
// }
// sum();

abc();
var a = 10;
function abc() {
    def();
    xyz();
    // console.log(a);
    function def(){
        // console.log(a);
    }
    function xyz(){
        console.log(a);
        a = 55;
    }
}

