// 1. pick a pivot element
//    pick first/last/random/median as pivot
// 2. put everthing smaller than pivot into left array and everthing greater than pivot in right array
// 3. repeat the process until left < right     



function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller than the pivot 
        if (arr[j] < pivot) {
            // Increment index of smaller element 
            i++;
            // Swap elements 
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    // Swap pivot to its correct position 
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1; // Return the partition index 
}

function quickSort(arr, low, high) {
    if (low >= high) return
    let pivot = partition(arr, low, high)

    quickSort(arr, low, pivot - 1)
    quickSort(arr, pivot + 1, high)
}

let arr = [10, 80, 30, 90, 40];
quickSort(arr, 0, arr.length - 1)
console.log(arr);