class MaxHeap{
    constructor(){
        this.arr = [];
    }

    insert(val){
        // add first element in array and return
        if(this.arr.length==0){
            this.arr.push(val);
            return;
        }
        // add item in the array and call heapify is required
        this.arr.push(val); // length-1
        let parent = Math.floor((this.arr.length-2)/2)
        if(val>this.arr[parent])
            this.heapifyInsert(this.arr.length-1, parent);
    }

    heapifyInsert(i, parent){
        // return if already at root node
        if(i<=0) return;
        // swap parent with the i node
        [this.arr[i], this.arr[parent]] = [this.arr[parent], this.arr[i]];
        // find the new parent -> parent of parent
        let newParent = Math.floor((parent-1)/2);
        if(newParent<0 )return;
        // call heapify again if require
        if(this.arr[parent]>this.arr[newParent])
            this.heapifyInsert(parent, newParent);
    }

    getMax(){
        return this.arr[0];
    }
}