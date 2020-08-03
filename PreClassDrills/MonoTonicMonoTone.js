/*
An array is monotonic if it is either monotone increasing or monotone decreasing.
An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

Example 1:
Input: [1,2,2,3]
Output: true
            true because i[0] >= j[1]

Example 2:
Input: [6,5,4,4]
Output: true

Example 3:
Input: [1,3,2]
Output: false

Example 4:
Input: [1,2,4,5]
Output: true

1) read through the dataset
    a) compare the numbers in the dataset to eachoter sequentially, starting at the first comparing it to the second, then the second to the third, etc.
        i) if the first number is smaller than the second, and the second is smaller than the third etc, the array is monotonic increasing and retunrs true
        ii) if the first number is larger than the second and the second is smaller than the third etc, the array is monotine decreasing and returns true
        iii) if neither i) or ii) are true, return false

 */

const isMonotonic = (arr) => {
    // let result;

    // for (let i = 0; i < arr.length; i++) {
    //     console.log("i, then i+1: ", i, i + 1)
    //     console.log("arr[i], then arr[i+1]: ", arr[i], arr[i+1])

    //     if (arr[i] >= arr[i+1] || arr[i] <= arr[i+1]) {
    //         result = true;
    //     } else {
    //         result = false;
    //     };
    // };
    // return result;
};

console.log("expects true: ", isMonotonic([1, 2, 2, 3]));
console.log("expects true: ", isMonotonic([6, 5, 4, 4]));
console.log("expects false: ", isMonotonic([1, 3, 2]));
console.log("expects true: ", isMonotonic([1, 2, 4, 5]));
