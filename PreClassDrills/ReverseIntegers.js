/*

Given a positive or negative integer, reverse the digits of the integer.
Example 1:
Input: 123
Output: 321
Example 2:
Input: -123
Output: -321
Example 3:
Input: 120
Output: 21
-------------------------------------------------------
Algorithm

1) take the integer and split it into individual digits
2) reverse the order of the digits
3) return the reversed order
*/

function reverseIntegers(num) {
    var result = [];
    // turn the number into a string
    var sNum = num.toString();
    // push the digits of the ineger into an array in reverse order
    for (let i = 0; i < sNum.length; i++) {
        result.push(sNum[i]);
        console.log(sNum)
        
    };
    return result.reverse().join('');

}

console.log(reverseIntegers(865));