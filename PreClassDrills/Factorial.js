/*

 Write code to create a function that returns the factorial of `num`
    Note: A factorial is the product of an integer and all the integers below it.
    Example 1:
    Input = 4
    Output = 24
    Explanation: 4 * 3 * 2 * 1 = 24
    Example 2:
    Input = 3
    Output = 6 
    Explanation: 3 * 2 * 1 = 6
--------------------------------------------------------------------------
Algorithm
    1) create a dataset with numbers between the input and 1, inclusive of both
        a) count down by 1 and add each number to the dataset
    2) multiply the input by the set of numbers created
    3) return the product

  */


  const factorial = (num) => {

      // 1st iteration
        // push 4 into nums array
    // 2nd interation 
        // push 4 - 1 into nums array

        //create a for loop and count down starting from num
      for (let i = num - 1; i >= 1; i--) {
            // multiply num by i
            // 1st iteration 
                // num * i (4*3)

            num *= i
      };

      return num;

  };

console.log(factorial(4))

//   function factorial(num) {

//     if (num === 0 || num === 1) {
//         return 1;
//     }

//     for (let i = num -1; i >= 1; i--) {

//         num *= i;
//     }

//     return num;

//   }

//   console.log(factorial(0));



// Andrew's solution

// function findFactorial(x){
//     // store an empty array to push integers less than x and greater than zero into
//     var factorialArray = [];
//     // create for loop to start at x, go till it hits 1, and decrements down to that one
//     for (i = x; i > 0; i--){
//     // create a variable to store value at the current index of the for loop
//     let currentNum = [i];
//     // push the current number into the factorial array
//     factorialArray.push(currentNum);
//     }
//     console.log(“Here’s the array: ” + factorialArray)
//     // a variable will hold the reduced array, after multiplying them
//     factorialResult = factorialArray.reduce(function(a, b) {
//     return (a * b);
// })
// console.log(factorialResult)
// }
// x = 4
// findFactorial(x)