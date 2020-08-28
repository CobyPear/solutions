/*
    For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

    Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.
    Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

    Example 1:

    Input: "III"
    Output: 3
    Example 2:

    Input: "IV"
    Output: 4
    Example 3:

    Input: "IX"
    Output: 9
    Example 4:

    Input: "LVIII"
    Output: 58
    Explanation: L = 50, V= 5, III = 3.
    Example 5:

    Input: "MCMXCIV"
    Output: 1994
    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

    ALGORITHM
    1) convert input string into an arraya
    2) set up conditionals for each case
        1) I = 1, IV = 4, V = 5, IX = 9, X = 10, XL = 40, L = 50, XC = 90, C = 100, CD = 400, D = 500, CM = 900, M = 1000

*/

const romanNumeralToInt = str => {

    const arr = str.toUpperCase().split('')

    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i]
        let prevElement = arr[i-1]

        switch (currentElement) {
            case 'I':
                result++;
                break;
            case 'V':
                result += 5;
                break;
            case 'X':
                result += 10;
                break;
            case 'L':
                result += 50;
                break;
            case 'C':
                result += 100;
                break;
            case 'D':
                result += 500
                break;
            case 'M':
                result += 1000
                break;
            default:
                break;
        }

        if (currentElement === 'V' && prevElement === 'I') {
            result -= 2
        }
        if (currentElement === 'X' && prevElement === 'I') {
            result -=2
        }
        if (currentElement === 'L' && prevElement === 'X') {
            result -=20
        }
        if (currentElement === 'C' && prevElement === 'X') {
            result -=20
        }
        if (currentElement === 'D' && prevElement === 'C') {
            result -=200
        }
        if (currentElement === 'M' && prevElement === 'C') {
            result -=200
        }
        
    }

    return result
}

console.log(romanNumeralToInt('III'))
console.log(romanNumeralToInt('IX'))
console.log(romanNumeralToInt('IV'))
console.log(romanNumeralToInt('MCMXCIV'))
console.log(romanNumeralToInt('XL'))
console.log(romanNumeralToInt('LVIII'))