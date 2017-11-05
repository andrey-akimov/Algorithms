function sum(arr) {
    return arr.reduce((sum, cur) => sum + cur, 0);
}

console.log(sum([1, 2, 3, 4, 5]));
