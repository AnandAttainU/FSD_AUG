var arr = [1,5,10,15]

var newArr = arr
            .filter(item => item%5!=0) // [1]
            .reduce((res, val) => res+val) // 1

console.log(newArr);