/*
BirthdayChocolate.png
s = array of squares
d = birthday Day (segments should sum to d)
m = month (segment that sum to do should be length m)

Algorithm
1) read through the dataset
2) starting with index 0, sum m values of the array
    if they equal d, add one to the coutner
    else, move on ot the next set of values
3) return final counter

*/

const birthday = (s, d, m) => {
    
    let finalCounter = 0;
    let tempArray = [];

    for (let i = 0; i < s.length; i++) {
        tempArray.push(s[i])

        if (tempArray.length === m) {

            if (tempArray.reduce((acc, cur) => acc + cur) === d) {
                finalCounter++;
                i -= m - 1;
                tempArray = [];

            } else {
                tempArray = [];
                i -= m - 1;
            }
        }
    }
    return finalCounter;
}

// console.log(birthday([2, 2, 1, 3, 2], 4, 2))
// console.log(birthday([1, 2, 1, 3, 2], 3, 2))
// console.log(birthday([1,1,1,1,1,1], 3, 2))
// console.log(birthday([2,5,1,3,4,4,3,5,1,1,2,1,4,1,3,3,4,2,1], 18, 7))
console.log(birthday([4], 4, 1))