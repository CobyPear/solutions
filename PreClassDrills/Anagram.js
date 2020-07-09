/*
Given two strings s and t , write a function to determine if t is an anagram of s.
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true
Example 2:
Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets. 

Algorithm
1) 
*/

function isAnagram(s, t) {

    let word1 = s.split("").sort().join("");
    let word2 = t.split("").sort().join("");

    return word1 === word2 ? true : false;

};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("bat", "tab"));
