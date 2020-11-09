/**
 * Drawing Book
 * 
 * Algorithm
 * 
 * if p is closer to the front, start from page 1, otherwise start from page n
 * count through the array until p is found
 * 
 */

const pageCount = (n, p) => {

    const totalPageCountFromFront = n / 2
    const targetPageCountFromFront = p / 2
    const targetPageCountFromBack = totalPageCountFromFront - targetPageCountFromFront
    if (n % 2 !== 0) {
        return Math.floor(Math.min(targetPageCountFromFront, targetPageCountFromBack))

    } else {
        return Math.ceil(Math.min(targetPageCountFromFront, targetPageCountFromBack))
    }
}

console.log(pageCount(6, 2))
console.log(pageCount(5, 4))
console.log(pageCount(6, 5))
console.log(pageCount(6, 3))