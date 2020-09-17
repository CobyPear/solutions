

const isPalindrome = word => {
    word = word.replace(/[\.\,\-\?\!\s]/g, "").toLowerCase();
    return word.split("").reverse().join("") === word
}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("Taco cat"))
console.log(isPalindrome("banana"))