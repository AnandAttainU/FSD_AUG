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

let q = new Queue();
q.enqueue(12);
q.enqueue(13);
q.enqueue(17);
console.log(q.dequeue());
console.log(q.isEmpty());