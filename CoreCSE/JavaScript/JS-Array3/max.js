function findMaxNoAndMaxIndex(arr){
    max = arr[0];
    maxIndex = 0;
    for(let i=0;i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
            maxIndex = i;
        }
    }
    newArr = [max, maxIndex];
    return newArr;
}

let arr = [1,6,2**10,22,87,555];
// let maxValues = findMaxNoAndMaxIndex(arr);
// console.log("Maximum number: ", maxValues[0], "Maximum Index: ", maxValues[1]);

function findMinAndMinIndex(arr){
    min = arr[0];
    minIndex = 0;
    for(let i=0; i<arr.length;i++){
        if(arr[i] < min){
            min = arr[i];
            minIndex = i;
        }
    }
    return [min, minIndex];
}

let minValues = findMinAndMinIndex(arr);
console.log("Minimum number: ", minValues[0], "Minimum Index: ", minValues[1]);