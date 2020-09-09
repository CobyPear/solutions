/*
Kangaroo (Kangaroo*.png)

x1 = kangaroo1's starting position
v1 = kangaroo1's jump distance
x2 = kangaroo2's starting positon
v2 = kangaroo2's jump distance

Algorithm

*/

const kangaroo = (x1, v1, x2, v2) => {

    // subtract starting point of kangaroo 2 from starting point of kangaroo 1
        // example 1 (0 - 4 = -4)
        // example 2 (0 - 5 = -5)
    const a = x1 - x2;
    // subtract jump distance of kangaroo 1 from jump distance of kangaroo 2
        // example 1 (2 - 3 = -1)
        // example 1 (3 - 2 = 1)
    const b = v2 - v1

    // if the remainder of a/b === 0 and a*b > 0
        // why does remainder of 0 and a*b > 0 result in "YES"?
        // we are solving for y in the equation x1 + y * v1 = x2 + y * v2
    return ((a % b === 0) && (a * b > 0)) ? "YES" : "NO"
    // example 1 (-4 % -1 === 0 && -4 * -1 > 0)
    // example 2 (-5 % 1 === 0 && -5 * 1 !> 0)

}

console.log(kangaroo(0, 3, 4, 2))
console.log(kangaroo(0, 2, 5, 3))
console.log(kangaroo(0, 2, 0, 3))
