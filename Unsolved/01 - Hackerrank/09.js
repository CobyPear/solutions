/*
Problem: Grading1.png + Grading2.png

Sam's (the grader) algorithm:
- if the difference of the grade and the next multiple of 5 is < 3, round grade up to next multiple of 4
- if the value of grade is < 38, no rounding occurs and result is still failing.

So to solve this, we need to evaluate the grade. grade - nextMultipleOf5 < 3, round up, else do nothing


Algorithm
1) read the grade. if grade < 40, return it.
    a) if a grade is > 40, find it's closest multiple of 5.
        i) if grade - closestMultipleOf5 < 3, then grade = closestMultipleOf5
        ii) else, do not round and return the grade
*/

const autoRounder = grades => {

    // recursive helper function for finding closest multiple of 5
    const findColsestMultipleOf5 = num => {
        // if the number does not end i 5 or 0,
        if (num % 5 === 0) {
            return num;
        } else {
            return findColsestMultipleOf5(num + 1);
        }
    };
    // findClosestMultiple(73);
    console.log(findColsestMultipleOf5(73))
    // set new array to hold results
    const result = [];
    // iterate around the grades array
    for (let i = 0; i < grades.length; i++) { 
        if (grades[i] < 35) {
            result.push(grades[i])
        } else if (findColsestMultipleOf5(grades[i]) - grades[i] < 3) {
             result.push(findColsestMultipleOf5(grades[i]))
        } else {
            result.push(grades[i])
        }
        
    }
    return result;
}

console.log(autoRounder([73, 67, 38, 33]))
console.log(autoRounder([92, 39, 42, 53, 87]))