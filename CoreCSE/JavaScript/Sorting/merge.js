let A = [1,4,6,9,12,15]; // n
let B = [2,3,7]; // m

function merge(A,B){
    let p = 0;     
    let q = 0;
    let C = []; // O(n+m)
    while(p<A.length && q<B.length){
        if(A[p]<B[q]){
            C.push(A[p]);
            p++;
        }
        else{
            C.push(B[q]);
            q++;
        }
    }
    // C = [1,2,3,4,6,7]
    while(p<A.length){
        C.push(A[p]);
        p++;
    }
    while(q<B.length){
        C.push(B[q]);
        q++;
    }
    return C;
}

console.log(merge(A,B));