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
    1) take the input and create a set of numbers that includes all numbers below it above 0
    2) multiply the input by the set of numbers created
    3) return the product

  */

  function factorial(num) {

    if (num === 0 || num === 1) {
        return 1;
    }

    for (let i = num -1; i >= 1; i--) {

        num *= i;
    }

    return num;

  }

  console.log(factorial(3));