function fact(num) {
    return num !== 1 ? num * fact(num - 1) : num;
}

console.log(fact(3));

// version with loop
//
// function fact(num) {
//     var x = num;
//     while (x > 1) {
//         x -= 1;
//         num *= x;
//     }
//     return num;
// }
// console.log(fact(5));
