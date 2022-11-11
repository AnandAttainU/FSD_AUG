// Calculate the grade of a student given the following conditions:
// if marks < 33 -> FAIL
// if 33 <= marks < 50 -> PASS
// if 50 <= m < 60 -> D
// if 60 <= m < 70 -> C
// if 70 <= m < 80 -> B
// if 80 <= m < 90 -> A
// if m > 90 -> S

// function calculateGrade(m){
//     if(m<33){
//         return 'FAIL';
//     } 
//     else if(m < 50 && m >= 33) return 'PASS'
//     else if(m < 60 && m >= 50) return 'D'
//     else if(m < 70 && m >= 60) return 'C'
//     else if(m < 80 && m >= 70) return 'B'
//     else if(m < 90 && m >= 80) return 'A'
//     else return 'S'
// }

function calculateGrade(a){
    switch(true){
        case a>10:
            console.log('I am 10');
            break;
        case a<=10:
            console.log('I am 20');
            break;
    }
}

var grade = calculateGrade(20);