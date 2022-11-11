function processData(input) {
    //Enter your code here
    let arr = input.split('\n');
    let i=0;
    let matSize = arr[i]; // extracting size of matrix from first row
    i++;
    let temp = matSize.split(' '); // split on space to get rows and columns
    let rows = temp[0]-0;
    let columns = temp[1]-0; // -0 to convert into number format
    let mat = [];
    for(let j=0; j<rows;j++,i++){ // to extract each of the row to generate the final matrix
        let curr_row = arr[i];
        let curr_arr = curr_row.split(' ');
        mat.push(curr_arr);
    }
    // for(let k=0; k<rows; k++){ // to convert matrix into number format
    //     for(let l=0;l<columns;l++){
    //         mat[k][l] -= 0;
    //     }
    // }
    let q = arr[i]-0; // taking number of queries
    i++;
    for(let p=0; p<q; p++,i++){ // extracting each of the test case
        let curr_row = arr[i];
        let curr_arr = curr_row.split(' ');
        let N = curr_arr[0]-0;
        let M = curr_arr[1]-0;
        
        // Your main logic goes here
        let sum = 0;
        for(let j=0;j<N;j++){
            for(let k=0; k<M; k++){
                sum += mat[j][k]-0;
            }
        }
        console.log(sum);
    }
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
