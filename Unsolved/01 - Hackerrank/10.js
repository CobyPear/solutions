/*
Apple and Orange (AppleAndOrange*.png)
d = units of distance from it's tree of origin (negative value means fruit fell d units to the LEFT of the tree, postitive means fruit fell d units to the RIGHT of the tree)
a = position of the apple tree
b = position of the orange tree
s <-> t = inclusive range of Sam's house
m = array of d from a
n = array of d from b

Algorithm;
1) start with the apple tree
    a) take m and for each value d, add value of a
    b) if the result of this falls on Sam's house (s<->t), add one to appleCounter
2) Repeat steps for orange tree, taking into account the orange tree is to the left of the house, so only fruit with negative values can possibly fall on the house (the inverse is true for athe apple tree)
3) return the appleCount and orangeCount
*/

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    let appleCount = 0;
    let orangeCount = 0;

    const counter = (treeType, treePosition) => {

        for (let i = 0; i < treeType.length; i++) {
            treeType[i] += treePosition

            if (treeType[i] >= s && treeType[i] <= t) {
                if (treeType === oranges) {
                    orangeCount++;
                } else {
                    appleCount++
                }
            }
        }
    }
    counter(apples, a)
    counter(oranges, b)
    console.log(appleCount)
    console.log(orangeCount)
    return console.log(`${appleCount} apple(s) and ${orangeCount} orange(s) hit Sam's house.`)
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]))
console.log(countApplesAndOranges(4, 8, 6, 18, [-6, 4, 12, -12, -5, 6, -4, -3, 2, 4, 6, 1, 2, 0, 1, 6], [-8, -6, -2, 2, 3, 4, -5, -6, -8, -4, 3, 6, 4, 5]))