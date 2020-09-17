/*
iterate over chars in string
count amount of a char
return the count
*/

const charCounter = (chr, str) => {

    let count = 0;

    for (let i = 0; i < str.length; i++) {

        if (str[i] === chr) {
            count++;
        }
    }
    return count;
}

const charCounter2 = (chr, str) => str.split("").filter(c => c === chr).length


console.log(charCounter("c", "character"))
console.log(charCounter2("c", "character"))