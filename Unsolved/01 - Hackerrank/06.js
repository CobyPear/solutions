// mini-max sum

'use strict'

const miniMaxSum = arr => {

    const helper = (arg, arr) => {
        let mutable = [];
        mutable.push(...arr)
        if (arg === 'min') {
            let minArr = []
            mutable.sort((a, b) => a - b).pop()
            minArr.push(...mutable)
            return minArr
        } else if (arg === 'max') {
            let maxArr = []
            mutable.sort((a, b) => a - b).shift()
            maxArr.push(...mutable)
            return maxArr

        }
    }

    const summer =  arr => {
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum
    }

    let result = [];
    let max = summer(helper('max', arr))
    let min = summer(helper('min', arr))
    result.push(min, max)

    return result.join(' ');

}

console.log(miniMaxSum([1, 3, 5, 7, 9]))
console.log(miniMaxSum([1,2,3,4,5]))