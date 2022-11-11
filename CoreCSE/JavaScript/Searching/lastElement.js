// Ques - Given a non-descending array. 
// Find the last occurance/presence/index of the given target

function lastOccurance(arr, target){
    l = 0;
    r = arr.length-1;
    while(l<=r){
        mid = Math.floor((l+r)/2);
        if(target < arr[mid]){
            r = mid-1;
        }
        else if(target > arr[mid]){
            l = mid+1;
        }
        else{
            if(arr[mid]!=arr[mid+1]){
                return mid;
            }
            else {
                l = mid+1;
            }
        }
    }
    return -1;
}

arr = [1,2,2,4,5,6,7];
target = 2;

console.log(lastOccurance(arr, target));
