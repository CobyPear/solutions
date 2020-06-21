/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below. It must return an integer representing the absolute diagonal difference.

diagonalDifference takes the following parameter:

arr: an array of integers .
Input Format

The first line contains a single integer, , the number of rows and columns in the matrix .
Each of the next  lines describes a row, , and consists of  space-separated integers .

Constraints

Output Format

Print the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12
Sample Output

15
Explanation

The primary diagonal is:

11
   5
     -12
Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

     4
   5
10
Sum across the secondary diagonal: 4 + 5 + 10 = 19
Difference: |4 - 19| = 15

Note: |x| is the absolute value of x

*/

function diagonalDifference(arr) {
    // Write your code here
    var length = arr.length
    var sumDiag1 = 0;
    var sumDiag2 = 0;
    // loop to iterate through big array,
    for (var i = 1; i < length; i++) {
        // loop to iterate through individual array elements
        for (var j = 1; j < length; j++) {


            if (i === j) {
                sumDiag1 += arr[i][j];
            }
            
            if (i + j === length - 1) {
                sumDiag2 += arr[i][j];
            }


        }
    }

    return Math.abs(sumDiag1 - sumDiag2);
}

console.log(diagonalDifference([3], [1,6,8], [5,16,7], [6,34,760]))