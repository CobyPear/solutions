/*
Refer to problemImages/BreakingTheRecords.png for problem

Algorithm
1) create variables to hold max and min values. set to 0 first.
2) read through the dataset
    a) if the temp dataset is empty, add the first score to the array
    b) on the next iteration, if the score is not equal, add it to the temp dataset
    c) by the 3rd iteration we can start checking if a score is greater than or less than a score in our temp array. 
        If greater, we broke our max and we can add 1 to max count. and set new max
        if less, we add one to our min count and set new min
        else, we move on
3) return min and max count as an array
*/

const breakingRecords = scores => {

    let max;
    let min;
    let maxCounter = 0;
    let minCounter = 0;

    for (let i = 0; i < scores.length; i++) {
        const currentScore = scores[i]
        // if max is empty, set new max to currentScore
        if (max === undefined) max = currentScore;
        // if min is empty, set new min to currentScore
        if (min === undefined) min = currentScore;
        // if the current score is greater than current max, set new max and add 1 to counter
        if (currentScore > max) {
            max = currentScore;
            maxCounter++
        }
        if (currentScore < min) {
            min = currentScore;
            minCounter++
        }
    }

    return [maxCounter, minCounter]
}

console.log(breakingRecords([12,24,10,24]))
console.log(breakingRecords([10,5,20,20,4,5,2,25,1]))
console.log(breakingRecords([0,9,3,10,2,20]))