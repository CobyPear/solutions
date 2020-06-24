/*

Given an integer number n, return the difference between the product of its digits and the sum of its digits.
Example 1:
Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
Example 2:
Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21

------------------------------------------------------------------------
Algorithm
1) take the number (n) and multiply its digits. store this for later
2) take n and sum its digits. store this for later
3) subtract the first number stored from the second number

*/


function diffBetween(n) {
    var nString = n.toString()
    var arr = [];
    var sum = 0;
    var prod;

    for (let i = 0; i < nString.length; i++) {
        arr.push(+nString.charAt(i));
        sum += arr[i];
        prod = arr.reduce((prod, num) => prod * num, 1); 
    };

    return prod - sum
};

console.log(diffBetween(4421));
