/*
MigratoryBirds.png

Algorithm

Read through the dataset
    keep track of the number (key) and how many times it appears (value)
    return the lowest key with the greatest value

*/

// const migratoryBirds = arr => {

//     const birdCounter = {};
//     // set the objects key's to the bird IDs and the count to 0
//     arr.forEach(element => birdCounter[element] = 0);
//     let keysArr = Object.keys(birdCounter)

//     // for (let i = 0; i < arr.length; i++) {


//     //     for (let j = 0; j < arr.length; j++) {

//     //         if (parseInt(keysArr[i]) === arr[j]) {
//     //             // if the key matches the value in the array, add one to that id's count
//     //             birdCounter[arr[j]] += 1
//     //         }
//     //     }
//     // }

//     console.log({birdCounter})
//     return Object.keys(birdCounter).reduce((b, a) => birdCounter[a] > birdCounter[b] ? a : b)

// }

const migratoryBirds = arr => {
    let sortedArr = arr.sort()
    let counter = 0;
    let maxOccur = 1;
    let bird = sortedArr[0];

    for (let i = 0; i < sortedArr.length; i++) {

        // console.log("bird ", bird)
        counter = (sortedArr[i] === sortedArr[i - 1] ? counter + 1 : 0);

        console.log(sortedArr[i], sortedArr[i - 1])
        if (counter > maxOccur) {
            bird = sortedArr[i];
            maxOccur = counter;
        }

    }

    return bird;

}





console.log("expects 1 ",migratoryBirds([1, 1, 2, 2, 3]))
console.log("expects 4 ",migratoryBirds([1,4,4,4,5,3]))
console.log("expects 3 ",migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))



// const migratoryBirds2 = arr => {

//     const birdCounter = {};
//     // set the objects key's to the bird IDs and the count to 0
//     arr.forEach(element => birdCounter[element] = 0);
//     let keysArr = Object.keys(birdCounter)

//     for (let i = 0; i < arr.length; i++) {

//         if (parseInt(keysArr[i]) === arr[i+ 1]) {
//             // if the key matches the value in the array, add one to that id's count
//             birdCounter[arr[i]] += 1
//         }
//     }

//     return Object.keys(birdCounter).reduce((b, a) => birdCounter[a] > birdCounter[b] ? a : b)

// }


// console.log(migratoryBirds2([1, 1, 2, 2, 3]))
// console.log(migratoryBirds2([1,4,4,4,5,3]))
// console.log(migratoryBirds2([1,2,3,4,5,4,3,2,1,3,4]))
