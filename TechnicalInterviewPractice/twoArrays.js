/**
 * given two arrays of characters, return an array that contains all of the unique chars from the second array (chars that are in the second array but NOT the first array) as well as which chars in the second array show up most frequently (there could be multiple).
 * please return the data in the format of the example result
 * 
 * example:
 *  arr1 = ['a','b','c','e','j','f']
 *  arr2 = ['a','a','f','b','g','r','e','f','t']
 * 
 * result:
 * let result = {
 *  unique: ['g','r','t'],
 *  frequent: ['a','t']
 * }
 * 
 * ALGORITHM
 * 
 * check the values of array 2against array 1. 
 *  if they aren't the same, add the character to a new array called unique
 * 
 * check values in array 2 and check the frequency.
 *  add to a new array the characters that are most frequent to an array called frequent
 * 
 * 
 * --------------------------------------------------------------
 * Arron's approach
 *      since the question is asking for two things, i'll split it into two tasks.
 * 
 *      1) build unique dataset
 *      2) iterate around array2
 *          a) if the current element does not exist in array1, then this element is unique. push current element into the unique dataset.
 *          b) if the current element IS found in array1, then this elemnt is NOT unique. move onto the next element
 *      3) build frequent dataset
 *      4) keep track of the count for each element in array2
 *      5) identify the most frequent count and return each element that has a count equal to the most frequent
 *      6) return unique and frequent dataset
 * 
 *      instead of console.logging and seeing if your code is right, ask the interviewer if you're on the right t
 */

const twoArrays = (arr1, arr2) => {


    // returns an array with values found in array2 but not array1
    // const unique = [...new Set(arr2)].filter(x => !arr1.includes(x));

    let unique = [];
    const charCount = {};

    for (let i = 0; i < arr2.length; i++) {
        // also returns an array with values found in array2 but not array1
        if ((!arr1.includes(arr2[i])
            && (!unique.includes(arr2[i])))) {
            unique.push(arr2[i])
        }

        //     // this only works for the test case provided. if there was a char that appeared twice and another that appeared 3x, both would be added to the set.
        //     // if (arr2.indexOf(arr2[i]) !== arr2.lastIndexOf(arr2[i])) {
        //     //     set.add(arr2[i])
        //     // }

        // does a key value pair exist for this element and char count?
        // if it does, increment currentElement count by 1
        // if it does not, dynamically create a key value pair for this element and set it's count to 1.
        /*
        here, show the interviewer the desired output
        {
            a: 2,
            f: 2,
            b: 1,
            g: 1,
            r: 1,
            e: 1
        }
        */

        const currentElement = arr2[i]

        if (!charCount[arr2[i]]) {
            charCount[currentElement] = 1;
        } else {
            charCount[currentElement] += 1;
        };


    }

    // iterate around charCount and find largest value
    // if the current count is greater than mostFrequentCount, reassign value of mostFrequentCount to current count.
    // for each element that matches the most frequent count, first empty the frequent array, then push that into an array
    // else if the current count equals the mostFrequentCount
    // push this element into the frequent array

    let mostFrequentCount = 1;
    let frequent = [];
    for (const key in charCount) {
        if (charCount[key] > mostFrequentCount) {
            mostFrequentCount = charCount[key]
            frequent = [];
            frequent.push(key)
        } else if (charCount[key] === mostFrequentCount) {
            frequent.push(key)
        }

    }

    return {
        unique,
        frequent
    }
}

console.log(twoArrays(['a', 'b', 'c', 'e', 'j', 'f'], ['a', 'a', 'f', 'b', 'g', 'r', 'e', 'f', 't']))
console.log(twoArrays(['a', 'b', 'c', 'e', 'j', 'f'], ['a', 'a', 'f', 'b', 'g', 'r', 'e', 'f', 't', 'f', 't', 't']))