function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        minimum_index = i;
        
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[minimum_index]){
                minimum_index = j;
            }
        }
        console.log(minimum_index);
        [arr[i], arr[minimum_index]] = [arr[minimum_index], arr[i]]
    }
    return arr;
}

arr = [5,8,9,6,1,2];
console.log(selectionSort(arr));