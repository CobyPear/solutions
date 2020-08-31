/*
For the question, refer to problemImages/BirthdayCakeCandles.png

Algorithm

1) starting at index 1 of the dataset, sort the dataset to find the largest number (aka tallest candle)
    a) count the number of times that number appears
    b) return that count
*/

const birthdayCakeCandles = ar => {

    // // sort the array so that the tallest candle will be at ar[0]
    // ar.sort((a, b) => b - a);
    // const tallestCandle = ar[0]
    // let count = 0;

    // // for each element in the array, if it's value is equal to the tallest candle, add one to the count.
    // ar.forEach(x=> x === tallestCandle && count++)
    // console.log(count)
    // return count

    let result = 0;
    ar.sort((a,b)=>b-a).forEach(x=>x===ar[0] && result++)
    return result
}

console.log(birthdayCakeCandles([3,2,1,3]))