/*
12 hr to 24 hr (problemImages/1HrTo24Hr(08).png)

Algorithm

1) Read the input
    a) If input is 12:00:XX AM, return 00:00:XX
    b) If input is 12:00:XX PM, return 12:00:00
2) Any AM time (exception in 1a) will be the same without the AM at the end.
3) if the time is pm
    a) remove the PM from the end 
    b) take hour and add it to 12, return it.
*/

const timeConversion = s => {

    const timeArray = s.split(':');

    const hour = parseInt(timeArray[0])
    console.log("hour", hour)
    const minute = timeArray[1]
    const second = timeArray[2][0] + timeArray[2][1]
    const meridian = timeArray[2][2].toUpperCase()

    if (hour === 12 && meridian === "A") {
        return `00:${minute}:${second}`
    } else if (hour === 12 && meridian === "P") {
        return `${hour}:${minute}:${second}`
    } else if (hour < 12 && meridian === "P") {
        return `${hour + 12}:${minute}:${second}`
    } else if (meridian === "A" && s[0] === '0') {
        return `0${hour}:${minute}:${second}`

    } else if (meridian === "A" && s[0] !== '0') {
        return `${hour}:${minute}:${second}`
    }

};

console.log(timeConversion("12:00:00AM"))
console.log(timeConversion("12:00:00PM"))
console.log(timeConversion("12:50:00PM"))
console.log(timeConversion("03:45:00AM"))
console.log(timeConversion("6:30:00PM"))
console.log(timeConversion("11:59:59PM"))
console.log(timeConversion("06:40:03AM"))