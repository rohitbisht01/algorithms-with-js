// Big-O => O(2^n)

function fibonacci(n) {
    if (n < 2) return n
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(5)); // 5