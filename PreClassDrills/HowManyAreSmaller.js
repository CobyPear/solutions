/*
  Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
  That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

  Return the answer in an array.
  Example 1:
  Input: nums = [8,1,2,2,3]
  Output: [4,0,1,1,3]
  Explanation: 
  For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
  For nums[1]=1 does not exist any smaller number than it.
  For nums[2]=2 there exist one smaller number than it (1). 
  For nums[3]=2 there exist one smaller number than it (1). 
  For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
  Example 2:
  Input: nums = [6,5,4,8]
  Output: [2,1,0,3]
  Example 3:
  Input: nums = [7,7,7,7]
  Output: [0,0,0,0]

  1) compare the first number in the dataset to each other number in the array
    a) if the current number is greater than the next number in the array, add 1 to the count
    b) if the current number is equal to or less than the next number in the array, do nothing
  2) push each number count into a new array
    a) return the new array
   */

const howManyAreSmaller = (arr) => {
    // array for holding our final result
    let result = [];
    // first for loop will stay on [0] while second for loop checks each other number against it
    for (let i = 0; i < arr.length; i++) {
        // setting count to 0 here so that it resets on each iteration
        let count = 0;
        // second for loop checks each number against arr[i]
        for (let j = 0; j < arr.length; j++) {
            // if current number (arr[i]) is greater than each other number in the array (arr[j]), increase the count by 1
            if (arr[i] > arr[j]) {
                count++;
            };
        };
        // on each iteration of first for loop, push in the count to our results array
        result.push(smallerCount)
    };
    // return the result array
    return result;
};

console.log("expected output [4, 0, 1, 1, 3]: ", howManyAreSmaller([8, 1, 2, 2, 3]));
console.log("expected output [2, 1, 0, 3]: ", howManyAreSmaller([6, 5, 4, 8]));
console.log("expected output [0, 0, 0, 0]: ", howManyAreSmaller([7, 7, 7, 7]));
console.log("expected output [2, 1, 0, 3]: ", howManyAreSmaller([5, -1, -3, 7]));