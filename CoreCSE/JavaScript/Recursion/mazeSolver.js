let mat = [
    [0,0,1,1,1],
    [1,0,0,0,0],
    [1,1,0,0,0]
];

function mazeSolver(x,y,mat){
    if(x==mat.length-1 && y==mat[0].length-1) return 1;
    if(x>=mat.length || y>=mat[0].length) return 0;
    if(mat[x][y]==1) return 0;
    return mazeSolver(x+1,y,mat) + mazeSolver(x,y+1,mat);
}

let k = mazeSolver(0,0,mat);
console.log(`Number of paths ${k}`);


