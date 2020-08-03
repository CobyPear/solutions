/*
Given an array of numbers, remove any and all duplicates that exist within the array, and then return the total of the remaining numbers.
Example 1:
Input: nums = [8,1,2,2,3]
Output: 14
Example 2:
Input: nums = [1,1,3,5,8]
Output: 17
1) check each number of the array against each other number
    a) if a duplicate exists, remove it from the array
2) sum each number in the array
3) return the sum
 */

const noDupesSum = (arr) => {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 1; j < arr.length; j++) {


            if (arr[i] === arr[j]){

                arr.splice(j, 1);
            };
        }

        result += arr[i];
    }
    console.log(arr)
    return result;
};

console.log(noDupesSum([8, 1, 2, 2, 3]))
console.log(noDupesSum([1, 1, 3, 5, 8]))
console.log(noDupesSum([1,3,5,2,1,3]))