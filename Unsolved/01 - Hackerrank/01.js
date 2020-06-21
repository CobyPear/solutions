// Given an Array of integers, find the sum of each element in the array


function simpleArraySum(ar) {
    var sum = 0;
    for (let i = 0; i < ar.length; i++) {
        // read through the array
        // take each number and add it to the next number in the array

        sum += ar[i]

    }
    return sum
}
console.log(simpleArraySum([1, 2, 3, 4, 5]));