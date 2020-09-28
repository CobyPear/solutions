/*
BillDivision.pdf in problem images

Algorithm:
remove the item Anna didn't eat (k) from the bill array
sum the remaining items and divide the sum by 2
    if b === sum/2, return "Bon Appetit"
    else, add the missing item to the sum and subtract b, return this integer.
*/

const bonAppetit = (bill, k, b) => {
    let sum = 0;
    let result;

    for (let i = 0; i < bill.length; i++) {
        sum += bill[i]
    }
    if ((sum - bill[k]) / 2 === b) {
        result = "Bon Appetit"
    } else {
        result = (b - ((sum - bill[k]) / 2))
    }
    return result;
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12))
console.log(bonAppetit([3, 10, 2, 9], 1, 7))