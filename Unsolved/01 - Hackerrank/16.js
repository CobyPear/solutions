/*
"Day of the Programer"

Given a year inclusive between 1700 and 2700, print the 256th day of that year according to the official Russian calender of that year.

The Russian calender was the Julian calender from 1700 to 1918, and Gregorian from 1918 on the 32nd day, which was Feb 14th. 

In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years. 

In the Julian calendar, leap years are divisible by 4; 
in the Gregorian calendar, leap years are either of the following:
    Divisible by 400
    Divisible by 4, and NOT divisible by 100

Algorithm:
if the year is AFTER 1918, AND a leap year
    return Oct 15
if it is not a leap year,
    return Oct 14
if the year is BEFORE 1918, AND a leap year (it is divisible by 4,) 
    return oct 26
if it is not a leap year,
    return oct 25
*/

const dayOfProgrammer = year => {
    let day;
    let month = "09";
    let result;
    
    if (year === 1918) {
        day = "26"
    }

    if (year < 1918) {
        if (year % 4 === 0) {
            day = "12";
        } else {
            day = "13";
        }
    } else if (year > 1918) {
        console.log(year)
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
            day = "12";

        } else {
            day = "13";
        }
    }

    result = `${day}.${month}.${year}`;

    return result;

}

console.log(dayOfProgrammer(1800))
console.log(dayOfProgrammer(2016))
console.log(dayOfProgrammer(2017))