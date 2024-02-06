// Big-O => O(log n) => as we are reducing the search

function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length)
}

function search(arr, target, low, high) {
    if (low > high) {
        return -1;
    }

    let mid = Math.floor((low + high) / 2)
    if (arr[mid] === target) {
        return mid
    }

    if (arr[mid] < target) {
        search(arr, target, mid + 1, high)
    }
    else {
        search(arr, target, low, mid - 1)
    }
    return -1
}

console.log(recursiveBinarySearch([-5, 2, 10, 4, 6], 10));
console.log(recursiveBinarySearch([-5, 2, 10, 4, 6], 6));
console.log(recursiveBinarySearch([-5, 2, 10, 4, 6], 20));
