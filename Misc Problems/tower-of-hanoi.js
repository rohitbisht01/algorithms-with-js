// Objective is to move the entire stack to the last rod, obeying the following rules:
//  Only one disk may be moved at a time
//  Each move consists of taking the upper disk from one of the stacks and placing it o top of another stack or on an empty rod 
//  No disk may be placed on top of a disk 


// SOLUTION:
// Shift "n-1" disks from "A" to "B" using "C" (when required)
// Shift last disk from "A" to "C"
// Shift "n-1" disks from "B" to "C" using "A" (when required)

// Big-O => O(2^n)
function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return
    }
    towerOfHanoi(n - 1, fromRod, usingRod, toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n - 1, usingRod, toRod, fromRod)
}

towerOfHanoi(2, 'A', 'C', 'B')