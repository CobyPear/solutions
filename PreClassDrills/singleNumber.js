/*
Given an array of integers, every element appears twice except for one. Find that single one.
Example 1:
Input: [2,2,1]
Output: 1
Example 2:
Input: [4,1,2,1,2]
Output: 4 
-----------------------------------------------------------------------------------------------
Algorithm
    1) read the dataset and check for duplicates
    2) remove duplicates
    3) return remaining number

Algorithm 2
    1) read the dataset and check for non duplicates
    2) keep track of duplicates as we read the array
        a) count how many times each element appears
    3) return the number that has a value count of 1

*/

function singleNumber(nums) {
    const numberTracker = {};
    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i]

        // 1st iteration - nums[i] = 2
            // numberTracker = {}
        // if current number is present in the number tracker object
            // increase value of that key by 1
        // if not found in the numberTracker object 
            // add the key to the obj and set it's value to 1
            // (how to dynamically add a key to an object in javascript?)

    }
    
    // numberTracker
    // {
    //     2: 3,
    //     1: 1
    // }

    // read the object and return key who's value is 1
    // (how can you iterate around an object in javascript?)

}

console.log(singleNumber())