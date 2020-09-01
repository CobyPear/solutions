/*
Return the index of the first occurence of needle in haystack or -1 if needle is not part of haystack

example 1
input: haystack = 'hello', needle = 'll'
output: 2

example 2
input: haystack = 'aaaaa', needle = 'bba'
output: -1

Algorithm:

1) 
*/

const needleFinder = (haystack, needle) =>  !needle ? 0 : haystack.indexOf(needle)



const needleFinder2 = (haystack, needle) => {
    for (let i = 0; i < haystack.length; i++) {
        const element = array[i];      
    }
}

var strStr = (haystack, needle) => {
    if(!haystack.includes(needle)) return 0;
    let hayArray = haystack.split(needle)
    var needleIndex = hayArray[0].length
    return needleIndex
    }

console.log(needleFinder('hello', 'll'))
console.log(needleFinder('hello', ''))
console.log(needleFinder('hello', 'a'))
console.log(needleFinder('hello', 'lll'))

console.log(strStr('heasdfllo', 'll'))