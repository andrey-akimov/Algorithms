// search in JS

function binarySearch(num) {
    // console.log('Math: ', Math.round(Math.log2(num)));
    let counter = 0;
    while (num / 2 > 0) {
        if (num === 1) {
            break;
        } else {
            num = Math.round(num / 2);
        }
        counter++;
    }
    console.log(counter);
}
binarySearch(2000000000);
