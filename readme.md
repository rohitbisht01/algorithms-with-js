#### Asymptotic Notation

    Big-O Notation - Worst case complexity => describes the complexity of an algorithm using algebric terms => expressed in terms of input
    Omega Notation - Base case complexity
    Theta Notation - Average case complexity

#### Objects and Big-O

    Insert - O(1)
    Remove - O(1)
    Access - O(1)
    Search - O(n)
    Object.keys() - O(n)
    Object.values() - O(n)
    Object.entries() - O(n)

#### Arrays and Big-O

    Insert/remove at end - O(1)
    Insert/remove at begining - O(n)
    Access - O(1)
    Search - O(n)
    Push/pop - O(1)
    Shift/unshift/concat/slice/splice - O(n)
    forEach/map/reduce/filter - O(n)

#### Math Algorithms

    Fibonacci sequence
    Factorial of a number
    Prime number
    Power of two
    Recursion
    Fibonacci sequence with recursion
    Factorial of a number with recursion

#### Searching Algorithms

    Linear Search : O(n)
    Binary Search : O(logn)
    Recursive Binary Search

#### Sorting Algorithms (average case complexity)

    Bubble Sort : O(n^2)
    Selection Sort : O(n^2) : in-place + unstable (the order of duplicate elements isn't preserved after sorting) + comparision algo
    Insertion Sort : O(n^2) : performs well when the size of the array is small
    Divide and Conquer Algorithms:
        Merge Sort : O(n logn) : not a in-place sorting algo as it takes extra space (auxiliary array) - S(n): O(n)
        Quick Sort : O(n logn) : in-place sorting algo + doesn't take any extra space

#### Misc Problems

    Cartesian Product
    Climbing Stairs
    Tower of Hanoi

#### Data Structures

    Built-in ds
        Arrays : iterable
        Object : not iterable using for of loop
        Set : do not maintain insertion order + iterable
        Map : ordered + iterables

    Custom ds
        Stack : LIFO + eg. Browser history, undo operation when typing + expression comversions, call stack in js runtime
        Queue : FIFO + eg. Printers, CPU task scheduling, callback queue in js runtime
        Circular Queue : eg. Clock, Streaming data, Traffic lights
        Linked List : eg. All applications of both stacks and queues are applications of ll , Image Viewer
        Doubly Linked List
        Hash Table : known as hash map, used to store key-value pairs + key for fast look up + js object is a implementation of hash table ds + eg. Implemented where constant time lookup and insertion is required + database indexing + caches
        Tree : hierarchical + non-linear ds + eg. File system, family tree + organization tree + chat bot + DOM
        Binary Search Tree : eg. Searching, sorting, to implement ADT such as lookup tables and priority queues
        Graph : eg. Google maps, social media sites
