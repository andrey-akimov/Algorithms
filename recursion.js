// function fact(num) {
//     if (num > 1) {
//         return num * fact(num - 1);
//     } else {
//         return num;
//     }
// }
// console.log(fact(5));

// function fact(num) {
//     var x = num;
//     while (x > 1) {
//         x -= 1;
//         num *= x;
//     }
//     return num;
// }
// console.log(fact(5));

function greet(name) {
    console.log(`Hello ${name}!`);
    greet2(name);
    console.log('Getting ready to say bye...');
    bye();
}

const greet2 = name => console.log(`How are you, ${name}?`);
const bye = () => console.log('Ok bye!');

greet('maggie');
