// function twoSum(arr, target){
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i] + arr[j] == target){
//                 return [i,j];
//             }
//         }
//     }
// }

// Approach - 2
function twoSum(nums, target){
    for(let i=0; i<nums.length; i++){
        
        eleToSearch = target - nums[i];
        console.log(eleToSearch);
        // nums.splice(i,1);
        nums.splice(i,1);
        console.log(nums);
        index = nums.indexOf(eleToSearch);
        if(index != -1){
            return [i,index+1];
        }
        nums = newArr;
        console.log(nums);
    }
}
arr = [2,7,11,15];
target = 26;
// write the code to take input from
result = twoSum(arr, target);
console.log(result);