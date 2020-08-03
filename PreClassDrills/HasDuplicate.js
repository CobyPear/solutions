/*
    Given an array of integers, find if the array contains any duplicates.
    Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
    Example 1:
    Input: [1,2,3,1]
    Output: true
    Example 2:
    Input: [1,2,3,4]
    Output: false
    Example 3:
    Input: [1,1,1,3,3,4,3,2,4,2]
    Output: true

    Algorithm:
    1) read through the dataset
        a) check the first number against all other numbers
            i) if there's a duplicate, return true
            ii) else, go on to the next number and check it against the remaining numbers except itself
*/

const hasDuplicate = (arr) => {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.includes(arr[i])) {
            return true;
        } else {
            uniqueArray.push(arr[i]);
        };
    };
    return false;
};

/**
 * Erik's recursive answer:
 * function duplicate(arg){
 * if arg.length is 0, return false
    if (!arg.length){
        return false;
    }
    var next = arg.shift();
    if (arg.includes(next)){
        return true;
    }
    return duplicate(arg)
}
 */

 /**
  * Ryan's Set answer:
  * function compareSetToArray(nums) {
  return new Set(nums).size !== nums.length;
}
function checkDuplicates(nums) {
    if (compareSetToArray(nums)) {
        return true;
      } else {
        return false;
      }
}
  */

console.log("expected true:", hasDuplicate([1, 2, 3, 1]));
console.log("expected false:", hasDuplicate([1, 2, 3, 4]));
console.log("expected true:", hasDuplicate([1, 2, 2, 3, 4]));
console.log("expected true:", hasDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));