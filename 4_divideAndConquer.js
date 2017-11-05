function divideAndConquer(length, width) {
    if (length > width) {
        return length - width !== 0 ? divideAndConquer(length - width, width) : width;
    } else {
        return width - length !== 0 ? divideAndConquer(length, width - length) : width;
    }
}

console.log(divideAndConquer(1680, 640));

// function sum(arr) {
//     if (arr.length === 0) {
//         return 0;
//     } else if (arr.length !== 1) {
//         let cur = arr[arr.length - 1];
//         arr.length = arr.length - 1;
//         return cur + sum(arr);
//     } else {
//         return arr[0];
//     }
// }
// console.log(sum([2, 4, 6]));
