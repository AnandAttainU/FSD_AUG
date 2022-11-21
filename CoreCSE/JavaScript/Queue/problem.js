class Queue {
    constructor(){
        this.arr = [];
    }
    enqueue(item){
        this.arr.push(item);
    }
    dequeue(){
        return this.arr.shift();
    }
    isEmpty(){
        return this.arr.length==0;
    }
}

function solve(a,b,k){
    let q = [a,b];
    for(let i=0, size=2 ; size<k+1; size += 2, i++){
        let ele = q[i];
        q.push(ele*10 + a);
        q.push(ele*10 + b);
    }
    return q[k];
}

console.log(solve(1,2,15));