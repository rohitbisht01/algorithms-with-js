// Big-O => O(n)

function isPrime(n) {
    if (n < 2) return false
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

// Optimal approach 

// Integer larger than the square root do not need to be checked because, whenever n = a * b, one of the two factors 'a' and 'b' is less than or equal to the square root of 'n'
// Big-O => O(sqrt(n))
function isPrimeOptimal(n) {
    if (n < 2) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true

}

console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false