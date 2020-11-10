/**
 * repeated string PDF
 */

const repeatedString = (s, n) => {
    if (s === 'a') return n
    if (!s.includes('a')) return 0

    let count = 0,
        frac = Math.trunc(n / s.length),
        remaining = n % s.length

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === 'a') ++count
    }
    count = count * frac

    for (let i = 0; i < remaining; i++) {
        if (s.charAt(i) === 'a') ++count

    }


    return count
}

console.log(repeatedString("aba", 10))
console.log(repeatedString("ebcdddafdfeffaddbceddebafbbebebbbcefcbcdfbaabecfaaeeaaffdfccffbdeeaabcfeecfcecbfebacefebdfaeedadebdf", 561984209086))
console.log(repeatedString("aadcdaccacabdaabadadaabacdcbcacabbbadbdadacbdadaccbbadbdcadbdcacacbcacddbcbbbaaccbaddcabaacbcaabbaaa", 942885108885))
console.log(repeatedString("aedbdaeaddadddcedcbbabdccbecaecaccdbebeeadadcaabbaabbaeeeecaddbcdecbbdccdebaaebecdaaabbcdeccbabaabce", 731869010806))