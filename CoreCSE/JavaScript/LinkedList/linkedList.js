class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        // this.size = 0;
    }

    insertAtEnd(val){
        let node = new Node(val);
        if(this.head==null){
            this.head = node;
        }
        else{
            let cur = this.head;
            while(cur.next!=null){
                cur = cur.next;
            }
            cur.next = node;
        }
    }

    insertAtBegin(val){
        let node = new Node(val);
        node.next = this.head;
        this.head = node;
    }

    printSize(){
        let cur = this.head;
        let size = 0;
        while(cur!=null){
            cur = cur.next;
            size++;
        }
        console.log(size);
    }
}

let lilist = new LinkedList();
lilist.insertAtEnd(4); // head->4->null
// console.log(lilist.head.val);
lilist.insertAtBegin(2); // head->2->4->null
// console.log(lilist.head.next.val);
lilist.insertAtEnd(5);
lilist.printSize();
console.log(lilist);