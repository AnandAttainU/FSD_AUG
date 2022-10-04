// function fun(){
//     function inner(){
//         console.log("123");
//     }
//     return inner;
// }
// fun()();

// volume = l*b*h
// function volume(l,b,h){
//     return l*b*h;
// }

function length(l){
    function breadth(b){
        function height(h){
            return l*b*h;
        }
        return height;
    }
    return breadth;
}

var temp = length(2)(3)(4);
console.log(temp);




