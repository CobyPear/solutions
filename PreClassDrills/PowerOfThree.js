/*

Given an integer, write a function to determine if it is a power of three.
Example 1:
Input: 27
Output: true
Example 2:
Input: 0
Output: false
Example 3:
Input: 9
Output: true
Example 4:
Input: 45
Output: false
----------------------------------------------------------------------

Algorithm
1) check the input number to see if it's a power of 3
    a) is 3^2 equal to the number? if so, return true, if not, next
    b) is 3^3 equal to the number? if so, return true, if not, next
    c) is 3^4 equal to the number? if so, return true, if not, next
    etc


*/

function powerOfThree(n) {

        if (n === 1) {
            return true;
        } else if (n > 1 && n % 3 === 0) {
            return powerOfThree(n/3);
        } else {
             return false
        }
    
}

console.log(powerOfThree(812))