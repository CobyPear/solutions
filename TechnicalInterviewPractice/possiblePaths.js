/*
test cases say 4 cities, 24 possible paths
4 cities. 3 paths remain, then 2, then 1
aka 4 * 3 * 2 * 1 or 4!

*/

const possiblePahts = n => {

    if (n > 1) return n * possiblePahts(n - 1)
    return 1;
}

console.log(possiblePahts(4))