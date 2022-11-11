function findingPeakElement(arr){
    l = 0;
    r = arr.length-1;
    while(l<=r){
        mid = Math.floor((l+r)/2);
        if((mid==0 && arr[mid] >= arr[mid+1])  // first element is peak or not
        || (mid == arr.length-1 && arr[mid] >= arr[mid-1]) // last element is peak or not
        || (arr[mid]>=arr[mid+1] && arr[mid] >= arr[mid-1]) // all other positions
        ){
            return mid;
        }
        else if(arr[mid+1]>arr[mid]){
            l = mid+1;
        }
        else if(arr[mid-1]>arr[mid]){
            r = mid-1;
        }
    }
    return -1;
}

let arr = [75,10,16,18,26,19,40,49];
console.log(findingPeakElement(arr));



// Given an unsorted Array. Find the maximum Element.
// T(n) = O(n) - linear search
