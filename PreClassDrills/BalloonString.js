/*
  Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
  You can use each character in text at most once. Return the maximum number of instances that can be formed.
  Example 1:
  Input: text = "nlaebolko"
  Output: 1
  Example 2:
  Input: text = "loonbalxballpoon"
  Output: 2
  Example 3:
  Input: text = "leetcode"
  Output: 0

    Algorithm
    1) search the dataset for instances of 'balloon'
    2) keep track of each instance of 'b', 'a', 'l' etc.
        a) if b, a, n have one instance and l, o have 2 instances each, increase balloon count by 1
    3) return the balloon count
*/

// balloonFinder = (str) => {

//     let balloonCounter = 0;

//     for (let i = 0; i < str.length; i++) {

//         if (str[i].includes("b") && str.includes("a") && str.includes("l") && str.includes("l") && str.includes("o") && str.includes("o") && str.includes("n")) {

//             balloonCounter++;

//         };

//         return balloonCounter;
//     };

// };

// console.log("Test case lonbalxballpoon (should return 2): ", balloonFinder("loonbalxballpoon"));
// console.log("Test case nlaebolko (should return 1): ", balloonFinder("nlaebolko"));
// console.log("Test case leetcode (should return 0): ", balloonFinder("leetcode"));
// console.log("Test case baolcloobalnlelaooonfbadllloon (should return 4): ", balloonFinder("baolcloobalnlelaooonfbadllloonballoon"));
// console.log("Test case lbn (should return 0): ", balloonFinder("lbn"));
// console.log("Test case balon (should return 0): ", balloonFinder("balon"));
// console.log("Test case xq (should return 0): ", balloonFinder("xq"));
// console.log("Test case l (should return 0): ", balloonFinder("l"));
// console.log("Test case a (should return 0): ", balloonFinder("a"));
// console.log("Test case bbbbb (should return 0): ", balloonFinder("bbbbb"));