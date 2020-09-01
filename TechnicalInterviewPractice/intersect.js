/*
Given two arrays, write a function to compute the intersection

example 1
input: arr1 = [1, 2, 2, 1], arr2 = [2, 2]
output: [2, 2]

example 2
input arr1 = [4, 9, 5], arr2 = [9, 4, 9, 8, 4]
output: [4, 9]

Algorithm:
1) search through arr 1
*/

const intersect = (nums1, nums2) => {
    let smallArr;
    let largeArr;

    if (nums1.length > nums2.length) {
        largeArr = nums1
        smallArr = nums2
    } else {
        largeArr = nums2
        smallArr = nums1   
    }
    console.log('small', smallArr)
    console.log('large', largeArr)
    const results = [];

    smallArr.forEach(x => largeArr.includes(x) && (results.push(x), largeArr.splice(x)))

    return results
}

console.log(intersect([1,2,2,1], [2,2]))
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
console.log(intersect([4, 9, 5, 9], [9, 4, 9, 8, 4]))
console.log(intersect([1,1], [2,1,4]))