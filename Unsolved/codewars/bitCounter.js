const countBits = (n) => {

    // // get the binary of the input
    // const binary = n.toString(2).split("");
    // // counter to store number of 1s
    // let count = 0;

    // // for each one, tick the counter up by 1.
    // binary.forEach(element =>  element === "1" && count++);

    // // return final count
    // return count;

    // one line answer from codewars
    return n.toString(2).split('0').join("").length;
}

console.log(countBits(1))
console.log(countBits(5))
console.log(countBits(100))