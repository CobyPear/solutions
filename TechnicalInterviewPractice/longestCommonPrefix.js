/*
Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.

Algorithm

1) read through the array of strings
    a) if the beggining of each string is the same, add it to an array and move to the next one
    b) if the next is the same for each string, add it to the arrray and move on, continue until not all strings have the same letter at that position.
2) return the new array as a string

Arron's Algo
Take first char in first word
iterate around arrray
on each iteration, remove all chars after the length of the current prefix
run check of prefix vs the remainder of the string
if the dont equal eachother, the current logest prefix is the output.


*/

const longestCommonPrefix = arr => {

    let prefix = '';

    for (let i = 0; i < newArr.length; i++) {


        for (let j = 0; j < newArr[i].length; j++) {
            console.log(newArr[i][j])
            if (!prefix) {
                prefix += newArr[i][j]
                newArr.splice([i][j], 1)
            }
            
        }
       }

       console.log('after splice', newArr)
}


console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))