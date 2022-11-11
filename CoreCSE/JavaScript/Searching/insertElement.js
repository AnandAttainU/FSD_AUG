function binarySearch(arr, target){
    let l = 0;
    let r = arr.length-1;
    let mid;
    while(l<=r){
        // console.log(l,r,mid);
        mid = Math.floor((l+r)/2);
        if(target < arr[mid]){
            r = mid - 1;
        }
        else if(target > arr[mid]){
            l = mid + 1;
        }
        else{
            return mid;
        }
    }
    return -1;
}

arr = [1,3,5,6]
target = 2;

console.log(binarySearch(arr, target));