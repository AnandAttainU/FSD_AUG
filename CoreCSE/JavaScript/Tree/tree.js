class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let node1 = new Node(2);
let node2 = new Node(1);
let node3 = new Node(3);
let node4 = new Node(4);

node1.left = node2;
node3.right = node4;
node1.right = node3;
let root = node1;
//    2
//  1   3
//        4

function preOrder(root){
    if(root==null) return;
    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
}

function InOrder(root){
    if(root==null) return;
    InOrder(root.left);
    console.log(root.val);
    InOrder(root.right);
}

function postOrder(root){
    if(root==null) return;
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.val);
}

let count=0;
function numberOfNode(root){
    if(root==null) return;
    count++;
    numberOfNode(root.left);
    numberOfNode(root.right);
}

function numberOfNode2(root){
    if(root==null) return 0;
    let lsn = numberOfNode2(root.left);
    let rsn = numberOfNode2(root.right);
    return lsn + rsn + 1;
}



// 2134 - Pre
// 1234 - In
// 1432 - Post

preOrder(root);
console.log("-------");
InOrder(root);
console.log("-------");
postOrder(root);
console.log("-------");
console.log(numberOfNode2(root));




