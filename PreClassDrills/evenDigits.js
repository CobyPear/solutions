/*

Given an array nums of integers, return how many of them contain an even number of digits.
Example 1:
Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.
Example 2:
Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.

----------------------------------------------------------------------------------------------------
Algorithm
    1) read one value in the dataset at a time
    2) determine the numeric length of each value
        a) if the length is an even number, add 1 to our count
        b) if not, check the next value in the dataset
    3) return the count
*/

function evenDigits(arr) {
    // keeps track of even number count
    var count = 0;
    // read the array
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i].toString().length % 2 === 0) {
            count ++
        }
    }
    return count;
};

console.log(evenDigits([555,901,482,1771]))
console.log(evenDigits([12,345,2,6,7896]))
console.log(evenDigits([12,569,18,245625,7896,48,5614,132,156514]))
