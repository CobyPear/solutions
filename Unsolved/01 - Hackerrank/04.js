/*

https://www.hackerrank.com/challenges/plus-minus/problem?h_r=next-challenge&h_v=zen

Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4  are acceptable.

For example, given the array arr = [1,1,0,-1,-1]  there are 5 elements, two positive, two negative and one zero. Their ratios would be 2/5 = 0.4000000 , 2/5 = 0.4000000 and 1/5 = 0.2000000 . It should be printed as

0.400000
0.400000
0.200000
Function Description

Complete the plusMinus function in the editor below. It should print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimals.

plusMinus has the following parameter(s):

arr: an array of integers
Input Format

The first line contains an integer, , denoting the size of the array.
The second line contains  space-separated integers describing an array of numbers .

Constraints



Output Format

You must print the following  lines:

A decimal representing of the fraction of positive numbers in the array compared to its size.
A decimal representing of the fraction of negative numbers in the array compared to its size.
A decimal representing of the fraction of zeros in the array compared to its size.
Sample Input

6
-4 3 -9 0 4 1
Sample Output

0.500000
0.333333
0.166667
Explanation

There are  positive numbers,  negative numbers, and  zero in the array.
The proportions of occurrence are positive: , negative:  and zeros: .

-----------------------------------------------------------------------------------------------------------------

Algorithm
1) read through the dataset.
    a) keep track of the number of positive integers
    b) keep track of the number of negative integers
    c) keep track of the number of zeros
2) each tracked number will be a the numerator to the denominator of total number of items in the dataset
3) conver this fraction to a decimal and print them out, each on it's own line
*/



function plusMinus(arr) {

    //positive integers in the array
    var posInt = 0;
    // negative integers in the array
    var negInt = 0;
    // zeroes in the array
    var zeroes = 0;
    // array length
    var n = arr.length;

    // read through the dataset
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            posInt++;
        } if (arr[i] === 0) {
            zeroes++;
        } if (arr[i] < 0) {
            negInt++;
        };
    }
    var posDesc = posInt / n;
    var negDesc = negInt / n;
    var zeroesDesc = zeroes / n;
    

    return (
        posDesc + '\n' +
        negDesc + '\n' +
        zeroesDesc
    )

};

console.log(plusMinus([-1,0,-1,1,1,-1,0]))
console.log(plusMinus([1,2,3,-1,-2,-3,0,0]))