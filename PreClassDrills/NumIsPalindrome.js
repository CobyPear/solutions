/*
  Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
  Note: Negative numbers are not palindromic.
  Example 1:
  Input: 121
  Output: true
  Example 2:
  Input: 10
  Output: false
  Explanation: Reads 01 from right to left. Therefore it is not a palindrome. 

  algo
  1) check the number against a reversed version of that number
   */

// const isPalindrome = (num) => {
//     let revNum = num.toString().split("").reverse().join("")

//     console.log("revNum: ", revNum)

//     return num.toString() === revNum ? true : false;
// };

const pal2 = (num) => num.toString().split("").reverse().join("") === num.toString() ? true : false;

// console.log(isPalindrome(121));
// console.log(isPalindrome(10));
// console.log(isPalindrome(1337));
// console.log(isPalindrome(42024));

console.log(pal2(121));
console.log(pal2(10));
console.log(pal2(1337));
console.log(pal2(42024));