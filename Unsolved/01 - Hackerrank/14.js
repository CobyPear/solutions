/*
DivisibleSumPairs.png

Algorithm
Read through the array
    add current index and next indext to a temp array that holds our potential pairs
    sum current index with next index
        if sum % k === 0, add our pair to our results dataset
        else, move on to the next pair (current index + j)
return results dataset
*/

const divisibleSumPairs = (n, k, ar) => {

    let count = 0;

    for (let i = 0; i < n; i++) {

        for (let j = i + 1; j < n; j++) {

            const sum = ar[i] + ar[j]

            if (sum % k === 0) 
                count++
        }
    }

    return count
}

console.log(divisibleSumPairs(6, 3, [1,3,2,6,1,2]))