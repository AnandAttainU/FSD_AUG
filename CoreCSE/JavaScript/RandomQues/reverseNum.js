// approach -1 -> using the array and string
// function reverseNum(n) { // 234
//     n = n.toString(); // '234'
//     n = n.split("") // ['2','3','4']
//     n = n.reverse(); // ['4','3','2']
//     n = n.join("") // '432'
//     n = Number(n); // 432
//     console.log(n);
// }

// reverseNum(234);


// approach - 2 -> using only the numbers

function reverseNum(n){
    let revNum = 0;
    while(n>0){
        rem = n%10;
        // console.log(rem);
        n = Math.ce(n/10);
        // console.log(n);
        revNum = revNum*10 + rem;
        // console.log(revNum);
    }
    return revNum;
}

console.log(reverseNum(234));