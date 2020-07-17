/*
  Given a positive integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
  Example 1:
  Input: num = 14
  Output: 6
  Explanation: 
  Step 1) 14 is even; divide by 2 and obtain 7. 
  Step 2) 7 is odd; subtract 1 and obtain 6.
  Step 3) 6 is even; divide by 2 and obtain 3. 
  Step 4) 3 is odd; subtract 1 and obtain 2. 
  Step 5) 2 is even; divide by 2 and obtain 1. 
  Step 6) 1 is odd; subtract 1 and obtain 0.
  Example 2:
  Input: num = 8
  Output: 4
  Explanation: 
  Step 1) 8 is even; divide by 2 and obtain 4. 
  Step 2) 4 is even; divide by 2 and obtain 2. 
  Step 3) 2 is even; divide by 2 and obtain 1. 
  Step 4) 1 is odd; subtract 1 and obtain 0.
  Example 3:
  Input: num = 123
  Output: 12

  1) decide if the number is even or odd
    a) if the number is even, divide by 2 and add 1 to the operation count
    b) if the number is odd, subtract 1 from the number and add 1 to the operation count
  2) when the number becomes 0, return the operation count
*/

// keep track of the number of operations
let opCount = 0;

function opToZero(num) {

    // if the number is even and positive...
    if (num % 2 === 0 && num > 0) {
        // increase operations count by one
        opCount++;
        // call the function again with the number passed in /2
        return opToZero(num/2);
    } else if (num % 2 === 1 && num > 0) {
        // increase operations count by one
        opCount++;
        // call the function again with the number passed in -1
        return opToZero(num-1);
        // when the number is 0
    } else {
        // return the opcount
        return opCount;
    };
};


console.log("expected output 12: ", opToZero(123));
opCount = 0;
console.log("expected output 11: ", opToZero(124));
opCount = 0;
console.log("expected output 4: ", opToZero(8));
opCount = 0;
console.log("expected output 6: ", opToZero(14));
opCount = 0;
console.log("expected output 7: ", opToZero(15));