/**
 * Given an array of integers and an integer k, you need to find the number of unique pairs (i, j) that have an absolute difference equal to k.
Example 1:
Input: [3, 1, 4, 1, 5], k = 2
Output: 2
Explanation: There are two unique pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
Example 2:
Input:[1, 2, 3, 4, 5], k = 1
Output: 4
Explanation: There are four unique pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
Example 3:
Input: [1, 3, 1, 5, 4], k = 0
Output: 1
Explanation: There is one unique pair in the array, (1, 1).
Note:
- The pairs (i, j) and (j, i) count as the same pair.
- The length of the array won't exceed 10,000.
- All the integers in the given input belong to the range: [-1e7, 1e7].

Algorithm:
1) read through the dataset
    a) remove all duplicates
        b) check the first number in the array against the next number
            i) calculate the adbsolute difference
            ii) if absolute diference = k, add one to uniqe pair counter
            iii) else, move on to the next number
2) return the unique pair count.

 */

const findUniquePairs = (arr, target) => {
    let counter = 0;

    const removeDuplicates = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    arr.splice(j, 1);
                };
            };
        };
    };
    removeDuplicates(arr);

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) === target) {
                counter++;
            };
        };
    };
    return counter;
};

console.log(findUniquePairs([3, 1, 4, 1, 5], 2));
console.log(findUniquePairs([1, 2, 3, 4, 5], 1));