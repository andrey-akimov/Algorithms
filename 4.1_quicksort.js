function swap(items, firstIndex, secondIndex) {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex]; // first el = last el
    items[secondIndex] = temp; // last el = first el
    console.log('swap');
}

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //[3] = 5
        l = left, //[0] = 4
        r = right; //[5] = 9

    while (l <= r) {
        while (items[l] < pivot) {
            l++;
            console.log('l', l);
            console.log('items[l]', items[l]);
        }
        while (items[r] > pivot) {
            r--;
            console.log('r', r);
            console.log('items[r]', items[r]);
        }
        if (l <= r) {
            swap(items, l, r);
            l++;
            r--;
        }
    }
    console.log('>>>>', l);
    return l;
}

function quickSort(items, left = 0, right = items.length - 1) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

var items = [4, 2, 6, 5, 3, 9];
// first call
console.log(quickSort(items));
