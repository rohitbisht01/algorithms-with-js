// Big-O => O(log n) => as we are reducing the search

function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] === target) {
            return mid
        }

        if (arr[mid] < target) {
            low = mid + 1
        }
        else {
            high = mid - 1
        }
    }
    return -1
}

console.log(binarySearch([-5, 2, 10, 4, 6], 10));
console.log(binarySearch([-5, 2, 10, 4, 6], 6));
console.log(binarySearch([-5, 2, 10, 4, 6], 20));