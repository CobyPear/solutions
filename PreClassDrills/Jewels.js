/*
  You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
  The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".
  Example 1:
  Input: J = "aA", S = "aAAbbbb"
  Output: 3
  Example 2:
  Input: J = "z", S = "ZZ"
  Output: 0
  Algorithm
  1) go through S and find any characters in J
  2) count the number of times characters J are found in S
  3) return the count
*/

// j = stones that are jewels. letters are distinct and case sensitive

// s = stones you have. each char is type of stone you have.
// how many S are also J?

const jewelsInStones = (j, s) => {
  // keep track of how many j are in s
  let count = 0;
  // go through s and find characters that are also in j
  for (let i = 0; i < s.length; i++) {
    j.includes(s[i]) ? count ++ : false;
  };
  return count;
};

console.log(jewelsInStones("aA", "aAAbbb"))
console.log(jewelsInStones("z", "ZZ"))