/*  
Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.
  Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1.
  Example 1:
  Input: arr = [2,2,3,4]
  Output: 2
  Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
  Example 2:
  Input: arr = [1,2,2,3,3,3]
  Output: 3
  Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
  Example 3:
  Input: arr = [2,2,2,3,3]
  Output: -1
  Explanation: There are no lucky numbers in the array.
  Example 4:
  Input: arr = [5]
  Output: -1
  Example 5:
  Input: arr = [7,7,7,7,7,7,7]
  Output: 7 

  
    ((( identify known unknowns )))

  1) read through the dataset starting with the first value
  2) compare each value against the rest of the data set
    a) if the current value equals another value in the data set, increment the count for this value
    b) else, move on to the next value
    c) check current count against current value
      1) if current count and current value equal each other, then check current value against largest lucky number
  3) repeat step 1-2 for the next value in the dataset until we are done counting
  4) if count is equal to the value being counted, return that value
    a) if there are multiple values to return this way, select the largest
    b) if there are no values to return this way, return -1
  */

  function isLucky(arr) {

  };

  console.log("expected output 7: ", isLucky([7,7,7,7,7,7,7]));
  console.log("expected output -1: ", isLucky([2,2,2,3,3]));
  console.log("expected output 3: ", isLucky([1,2,2,3,3,3]));