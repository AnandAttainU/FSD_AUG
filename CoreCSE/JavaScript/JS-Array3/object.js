obj = {
    // key: value
    a: 5,
    b: "hello",
    c: function(){
        console.log("inside object");
        return "something";
    }
}
// d = obj.b;
// obj['c']()
// obj.c()
console.log(obj['b'], obj['c']());
