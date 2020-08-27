/**
 * Given an array of integers, write an algorithm to return an array that contains only the UNIQUE values from the array of integers
Example
Input: [1, 9, 3, 3, 3, 5, 6, 7, 8, 1]
Output: [1, 9, 3, 5, 6, 7, 8]

ALGORITHM:

1) remove duplicates from the dataset
2) return the dataset with duplicates removed
 */

 const uniqueValues = arr => {

    // here arr, unique, and results all contain pretty much the same data.
    // the time complexity of this algo is O(n).
    // The space complexity is also O(n) -- the bigger our dataset, the larger our results
        // we're taking a block of memory to store our unique set, and a block fo store our results.
    const unique = new Set(arr) 
    const result = []
    unique.forEach(x=> result.push(x))
    return result
    // could have also returned [...unique] and got rid of the need for pushing to a new array
    // also see uniqueValues2() below.

 }

const uniqueValues2 = arr => [...new Set(arr)]


uniqueArray = (testArr) => {
    let uniqueChars = testArr.filter((i, index) => {
        return testArr.indexOf(i) === index;
    });
    console.log(uniqueChars)
}


console.log(uniqueValues([1, 9, 3, 3, 3, 5, 6, 7, 8, 1]))
console.log(uniqueValues2([1, 9, 3, 3, 3, 5, 6, 7, 8, 1]))