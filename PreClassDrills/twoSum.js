/*

Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

-------------------------------------------------

Algorithm
1) read the dataset (iterate around the dataset using a loop)
2) On each iteration, compare the value of the current index against subsequent indices
    a) if the current value of the index plus the subsequent value is equal to the target, output the indices of those 2 values.
    b) else, move onto the next index

*/

// declare a function named twoSum that takes in an array of numbers and a target as parameters
twoSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        // first iteration => 9 - 2 = 7;
        // does 7 exist in the array of numbers?
            // if it does, we found our 2 numbers that equal our target
        var numberToLookFor = target - arr[i];
        if (arr.indexOf(numberToLookFor) > -1) {
            return [arr[i], numberToLookFor];
        };
    };
};

console.log(twoSum([2, 7, 11, 15], 9));