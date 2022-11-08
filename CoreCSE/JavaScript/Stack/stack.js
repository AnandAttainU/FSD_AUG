class Stack {
    constructor(){
        this.arr = [];
    }
    push(element){
        this.arr.push(element);
    }
    pop(){
        return this.arr.pop();
    }
    peek(){
        return this.arr[this.arr.length-1];
    }
    isEmpty(){
        return this.arr.length==0;
    }
}

let st = new Stack(); // st {arr = []}
st.push(2); // st {arr = [2]}
st.push(5); // st {arr = [2,5]}
console.log(st.pop()); // 5, st {arr = [2]}
console.log(st.peek()); // 2, st {arr = [2]}
console.log(st.isEmpty());
console.log(st.pop());
console.log(st.isEmpty());
