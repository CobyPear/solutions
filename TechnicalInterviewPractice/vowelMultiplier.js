

const vowelMultiplier = (n, str) => {

    return str.split('')
            .map(c => c.match(/[aeiouy]/g) ? c.repeat(n) : c)
            .join('') 
}

console.log(vowelMultiplier(5, "yo"))