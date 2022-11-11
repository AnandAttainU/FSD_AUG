// num = "5631";
// res = 0;
// i=0;
// n=num.length;

// function sum(i){
//     if(i==n) return res;
//     res += num[i]-'0';
//     return sum();
// }

// console.log(sum(num, i));


function solve(str){
    if(str == "") return 0;
    return Number(str[0]) + solve(str.substr(1,str.length));
}

str = "56431";
console.log(solve(str));