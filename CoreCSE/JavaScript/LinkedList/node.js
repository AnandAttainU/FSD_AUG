class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

let node1 = new Node(5);
let node2 = new Node(6);
let node3 = new Node(8);
let node4 = new Node(2);

node1.next = node2;
node2.next = node3;
node3.next = node4;
// 5->6->8->2->null
console.log(node1.next.next.next.next);