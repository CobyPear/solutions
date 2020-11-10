/**
 * Jumping on the Clouds (pdf)
 * 
 * Algorithm
 * 
 */

const jumpingOnClouds = c => {

    let steps = 0

    for (let i = 0; i < c.length; i++) {
        const currentCloud = c[i];


        if (c[i + 2] === 0) {
            steps++
            i++
        } else if (c[i + 2] === 1 || c[i + 1] === 0) {
            steps++
        }
    }

    return steps
}


console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]))
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]))
console.log(jumpingOnClouds([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0]))