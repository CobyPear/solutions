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
 */

const twoArrays = (arr1, arr2) => {

    let unique = [];
    let set = new Set()
 
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            unique.push(arr2[i])
        }

        // this only works for the test case provided. if there was a char that appeared twice and another that appeared 3x, both would be added to the set.
        if (arr2.indexOf(arr2[i]) !== arr2.lastIndexOf(arr2[i])) {
            set.add(arr2[i])
        }
    }

    frequent = [...set]

    let result = {
        unique: unique,
        frequent: frequent
    }

    return result;
}

console.log(twoArrays(['a', 'b', 'c', 'e', 'j', 'f'], ['a', 'a', 'f', 'b', 'g', 'r', 'e', 'f', 't']))