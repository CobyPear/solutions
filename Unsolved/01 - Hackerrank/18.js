/**
 * Sock Merchant
 * 
 * Algorithm
 * read through the dataset
 * sort the set
 * count each time a value is present
 * add one to the final count for each time value is present / 2 (round down)
 * return the final
 */
"use strict"
const sockMerchant = (n, ar) => {

    let finalCount = 0;

    const sorted = ar.sort((a, b) => a - b)
    let counter;
    console.log(sorted)

    for (let i = 0; i < sorted.length; i++) {
        
        counter = (sorted[i] === sorted[i - 1] ? counter + 1 : 1);

        // console.log("sorted i ",sorted[i], "sorted i-1", sorted[i-1], {counter})
        console.log({counter})
        // console.log({finalCount})

        if (counter % 2 === 0) {
            finalCount += 1
        }

    }

    return finalCount
}

// console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]))
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
console.log(sockMerchant(9, [1,1,3,1,2,1,3,3,3,3]))