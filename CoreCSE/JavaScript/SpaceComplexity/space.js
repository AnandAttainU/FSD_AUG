str = "hello...n";

console.log(str);

function reverse(str){
    let str2 = ""
    let str3 = str2;
    for(let i=str.length-1; i>=0; i--){
        str2 = str2 + str[i]; // "" + 'o' -> o + l -> ol + l -> oll + e -> olle+h-> olleh
    }
    return str2;
}

// str2 -> str -> O(n)
// str3 -> str2 -> O(n)
// reverse -> fixed storage -> O(1)
// i -> number input -> fixed storage -> O(1)

// Total = O(n+n+2) => O(2n+2) => O(n)

console.log(reverse(str));