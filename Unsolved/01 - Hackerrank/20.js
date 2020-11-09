/**
 * Counting Valleys in problem images
 */

const countingValleys = (steps, path) => {

    let seaLevel = {
        at: true,
        above: {
            is: false,
            steps: 0
        },
        below: {
            is: false,
            steps: 0
        }
    }
    let valleys = 0

    for (let i = 0; i < path.length; i++) {
        let currentStep = path[i]

        switch (currentStep) {
            case "U":
                // if we're at sea level
                if (seaLevel.at) {
                    // set seaLevel.above to true
                    seaLevel.at = false
                    seaLevel.above.is = true
                    seaLevel.above.steps += 1
                    // if we're more than one step below sea level
                } else if (seaLevel.below.is) {
                    if (seaLevel.below.steps > 1) {
                        seaLevel.below.steps -= 1
                    } else {
                        seaLevel.below.steps -= 1
                        seaLevel.below.is = false
                        seaLevel.at = true
                        valleys++
                    }
                } else if (seaLevel.above.is) {
                    seaLevel.above.steps += 1
                }
                break;
            case "D":
                // if we're at sea level
                if (seaLevel.at) {
                    // set seaLevel.below.is to true
                    seaLevel.at = false
                    seaLevel.below.is = true
                    seaLevel.below.steps += 1
                        // if we're more than one step above sea level
                } else if (seaLevel.above.is) {
                    if (seaLevel.above.steps > 1) {
                        seaLevel.above.steps -= 1
                    } else {
                        seaLevel.above.steps -= 1
                        seaLevel.above.is = false
                        seaLevel.at = true
                    }
                } else if (seaLevel.below.is) {
                    seaLevel.below.steps += 1
                }
                break;
            default:
                break;
        }

    }
    return valleys
}
 


console.log(countingValleys(8, "UDDDUDUU"))
console.log(countingValleys(12, "DDUUDDUDUUUD"))
console.log(countingValleys(100, "DDDUDDUUDUDUUUUDUDUDDDDDDUDUDUDDUDUDDUDDUDUDUUDDDDUDUUUUDDDUUDDDUUDUDDDUDUDDUUDDUUDDUDUDDUDUUUUDDDDDUUUUUUDDUUDDDDDUUDUUDUUUDDDDDUUDDUUUDUUDUUDUDDUDDUDUUUUDUDDUDDUUUDUDUUUUUUDDUUUUDDUUDDUDDUDUDUDUDDDDUDUDDDDDDDDUDUDDUUUUDUUDDDDUDUUUUUDUDUDUDUDUUUDDDDDDDDDDDUUDUUDDUDDUDDUDDUUUUDDUUDDUDDUDDDUDDDUUUDUDUDDUUDUDDUDUUUUUUUDUDDDDDDDDDUUUDUDDDDUUDUUUDUUDUUUUUUDDDUDUUDDDDUUUUDDDUDDDUDDDDUDDUUUDUUDDUDDDUUUDUUDUUUDDUDDDDUUUUUDUDDUDDDUUDDUDUUDDDUUUDDDUUDDDDUDDUDDDUDDUUUUDUUUUUDDUDDDDUUDUUDUUUUDDDDUDUUDDUDDUDDDDUUUDDDDUDUDUDUUUDUUDDDDUUDUUUUDDUUDDUDDUUUUDUUDUDUUDDDUUUDUDUUUUDUDDUUDDUUUUDUUUDUDUUUUDDDDUUDUUDUUUDUDUUDDUUUDDDDUUDUDUUDUUDDUDUDUDUUUUUDDDUUUUDUDUDUUDDDDDUDUUDDUDDUDDDDUUDUDUDUUUUUUUDUUUUUUUDUUUUUUUDDDDUUDUUUUDUUDUDUUUDUUDUUDUDDDUUDUDDUDUDDDUDDUUUUDDUDDDDDUDUDDDDUUDUDUUDDDUDDDDUUUUUDDUUDDDDUDDDDDDUUDUUDUUUUDUUUUDUUUDUDDDUDUUUDUUUUDUUUUUUUUUDDDUDDUUUDUDUDDDUDDUUUUDUUDDDUDDUDUDDDUUDDUUUUUUUUUDDDDUUUUDDDUDDDUUUDUDDDDUUUUDUUDUDUUDDUUDDDUDDUUDDUUUUDDDDDUUUUUUDDUUUDDDUDDDUUUUUDDDUDUDDDDDDUUDUDUUDUDUUUUDUUUUUUUU"))