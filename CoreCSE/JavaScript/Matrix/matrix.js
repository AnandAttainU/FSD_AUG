let mat = [
        [1,5,7,9],
        [3,9,4,2], 
        [8,5,6,2],
        [6,7,8,9] 
    ]

let n = mat.length;
let m = mat[0].length;

// print left/principal diagonal - 1 9 6 9
for(let i=0; i<n; i++){
    console.log(mat[i][i]);
}
// T(n) = O(n)

// print 3rd column - 7 4 6 8
// for(let i=0; i<n;i++){
//     console.log(mat[i][2]);
// }

// o/p => 2nd row => 3,9,4,2
// for(let j=0; j<m; j++){
//     console.log(mat[1][j]);
// }

// for(let i=0; i<n; i++){
//     for(let j=0; j<m; j++){
//         console.log(mat[i][j]);
//     }
// }

// for(let i=0; i<rows; i++){
//     let str = ""
//     for(let j=0; j<columns; j++){
//         str = str + mat[i][j].toString();
//         str += " ";
//     }
//     console.log(str);
// }

// let arr = [1,5,8,9];
// for(let i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }

// console.log(mat);
// console.log("Order of matrix", rows, columns);
