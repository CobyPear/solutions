// a and b are arrays with 3 numbers. each number in array a will be compared to each number in array b. the bigger number receives a point, equal is a tie. the result should return an array of 2 integers, points for a and points for b. 

function compareTriplets(a, b) {
    var aPoints = 0;
    var bPoints = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            aPoints++;
        } else if (b[i] > a[i]) {
            bPoints++;
        }
        var result = [];
        result.push(aPoints, bPoints)
    }
    return result
}

console.log(compareTriplets([10, 12, 50], [20,20,10]))