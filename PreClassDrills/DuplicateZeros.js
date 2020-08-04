/**
Given a fixed length array of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
Note that elements beyond the length of the original array are not written.
Do the above modifications to the input array in place.
Example 1:
Input: [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
Example 2:
Input: [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]

Algorithm
1) read through the dataset. check if it includes 0
    a) if zero does not exist in the dataset, return the dataset.
    b) else, move on to the next step
2) for each zero, add another zero into the dataset to it's right
 */

//for each element in the array, if it's a zero, splice in a zero at that zero's index + 1

const ZeroDuplicator = (arr) => {
    if (!arr.includes(0)) {
        return arr;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                arr.splice(i + 1, 0, 0);
                arr.pop();
                i++;
            };
        };
    };
    return arr;
};

console.log("Expects [1,2,3]:", ZeroDuplicator([1, 2, 3]));
console.log("Expects [1,0,0,2,3,0,0,4]:", ZeroDuplicator([1, 0, 2, 3, 0, 4, 5, 0]));
console.log("Expects [2,4,5,0,2,3,0,0,3,0]:", ZeroDuplicator([2,4,5,0,2,3,0,0,3,0]));