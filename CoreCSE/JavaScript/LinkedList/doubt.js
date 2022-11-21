var getDecimalValue = function(head) {
    // caculate the size
    let size = 0;
    let cur = head;
    while(cur!=null){
        cur = cur.next;
        size++;
    }
    // calculate decimal value
    let i=0;
    cur = head;
    let decimalValue = 0;
    while(cur!=null){
        decimalValue += cur.val * Math.pow(2, size-i-1);
        i++;
        cur = cur.next;
    }
    return decimalValue;
};

// head->1->0->1->null
class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

let node1 = new Node(1);
let node2 = new Node(0);
let node3 = new Node(1);
// node1-> 1 -> null

node1.next = node2;
node2.next = node3;
// node1->1->0->1->null
let head = node1;
// head->1->0->1->null

console.log(getDecimalValue(head));


