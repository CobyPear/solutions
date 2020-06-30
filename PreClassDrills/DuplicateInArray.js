/*

  Write code to create a function that accepts an array numbers
  Return `true` is no number appears in the array more than once, else return `false`
  Example 1:
  Input: [1, 2, 3, 4, 5]
  Output: true
  Explanation: All numbers only appear once
  Example 2:
  Input: [1, 2, 3, 4, 5, 2];
  Output: false
---------------------------------------------------------------
Algorithm
1) read the dataset
2) check each number in the dataset to see if it appears once
    a) compare current value against subsequent in the dataset
        i) if the current number is not equal to any other number in the dataset, then we know the current number is unique, and keep checking the dataset
        ii) else, if the current number IS equal to any other number in the dataset, we know it is not unique, and return false

*/

function isDuplicate(arr) {

    for (let i = 0; i < arr.length; i++) {
        
        const currentNum = arr[i]
        // 1st iteration arr[i] = 1
        for (let j = i + 1; j < arr.length; j++) {
            // 1st iteration arr[j] = 2
            const nextNum = arr[j]
            if (currentNum === arr[j]) {
                return false;
            };
            
        }
    }
    return true;
};

console.log(isDuplicate([1, 2, 3, 4, 5, 2]));
console.log(isDuplicate([1, 2, 3, 4, 5]));

// node DuplicateInArray.js