let arr = [1,4,8,2,5,9];
target = 8;

function linearSearch(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i]==target){
            console.log("Element found at", i);
            return;
        }
    }
    console.log("Element not found");
}
 
linearSearch(arr, target);
