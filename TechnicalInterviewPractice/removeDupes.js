

const removeDupes = arr => {

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) result.push(arr[i])
    }
    return result;
}

const removeDupes2 = arr => {

    return Array.from(new Set(arr))
}

console.log(removeDupes(['jeff','sally','tim','sally']))
console.log(removeDupes2(['jeff','sally','tim','sally']))