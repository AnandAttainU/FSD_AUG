class Student {
    // name, age, getTotalMarks()
    constructor(name, age, marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
        // console.log(this);
    }
    getTotalMarks() {
        return this.marks;
    }
    getName(){
        return this.name;
    }
}

let st1 = new Student("Shubham", 20, 80);
st1.getTotalMarks();
// let st2
// // console.log(st1);

// let arr = new Array(1,2,3);

// class A {
//     constructor(a){
//         this.a = a;
//     }
//     addTen(){
//         return this.a+10;
//     }
// }
// class B {
//     constructor(){
//     }
//     addTen(){
//         return 10;
//     }
// }
// let objA = new A(5);
// console.log(objA.addTen());
// let objB = new B();
// console.log(objB.addTen());
class A{

    add(a,b){
        return a+b;
    }
    }
    
    let a = new A();
    console.log(a.add(1,2))