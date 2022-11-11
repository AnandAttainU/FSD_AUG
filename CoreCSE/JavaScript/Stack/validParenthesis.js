class Stack {
    constructor(){
        this.arr = [];
    }
    push(element){
        this.arr.push(element);
    }
    pop(){
        if(this.arr.length==0) return "Stack is empty already";
        return this.arr.pop();
    }
    peek(){
        if(this.arr.length==0) return "Stack is empty";
        return this.arr[this.arr.length-1];
    }
    isEmpty(){
        return this.arr.length==0;
    }
}

let s = "(())())";

// function validParenthesis(s){
//     // if(s.length%2!=0) return false;
//     let st = new Stack();
//     for(let i=0; i< s.length; i++){
//         if(s[i]=='('){
//             st.push('(');
//         }
//         else{
//             if(st.isEmpty()) return false;
//             st.pop();
//         }
//     }
//     return st.isEmpty();
// }

function validParenthesis(s){
    countSmall = 0;
    countMiddle = 0;
    countSquare = 0;
    for(let i=0; i<s.length; i++){
        if(s[i]=='('){
            count++;
        }
        else{
            if(count==0) return false;
            count--;
        }
    }
    if(count) return false;
    else return true;
}

console.log(validParenthesis(s));