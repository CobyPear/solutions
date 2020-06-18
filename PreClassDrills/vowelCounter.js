/*

Create a program that returns the the number of vowels in a given string
  Example 1)
  Input: 'Programmer'
  Output: 3
  Example 2)
  Input: 'Minnesota in the summertime'
  Output: 10

  Algorithm
    1) read through the dataset and identify which characters match a vowel(AEIOU)
    2) count the number of vowels in the dataset
    3) return the count
  */







function vowelCounter(string) {
    var vowelCount = 0;
    var vowel = 'aeiou';
    for (let i = 0; i < string.length; i++) {
        if (vowel.indexOf(string[i].toLowerCase()) > -1) {
            vowelCount++;
        };
    };
    return vowelCount;
};

console.log(vowelCounter('Programmer'));
console.log(vowelCounter('Minnesota in the summertime'));
console.log(vowelCounter('This is a really long sentence with a number of vowels. I\'m not sure how many vowels there are.'));

// node vowelCounter.js
