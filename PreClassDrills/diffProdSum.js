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

Algorithm
1) take input (number) and multiply its digits = a
2) take input and add its digits = b
3) subtract a from b
*/

diffProdSum = (n) => {
    var str = n.toString();
    let prod = 1;
    let sum = 0;

    for (let i = 0; i < str.length; i++) {

        sum += parseInt(str[i]);
        prod *= str[i]

    };

    // console.log(prod);
    // console.log(sum);

    return prod - sum;

}

console.log(diffProdSum(234))
console.log(diffProdSum(4421))