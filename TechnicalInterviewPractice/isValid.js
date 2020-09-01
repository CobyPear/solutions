/*
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
    An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

    Example 1:
    Input: s = "()"
    Output: true
    Example 2:
    Input: s = "()[]{}"
    Output: true
    Example 3:
    Input: s = "(]"
    Output: false
    Example 4:
    Input: s = "([)]"
    Output: false
    Example 5:
    Input: s = "{[]}"
    Output: true

    Algorithm
    1) if the string's length is odd, return false 
    2) if first character is closing, return false
    3) keep track of openeing parentheses
        a) store all opening parentheses in a dataset (a stack would work well here)
        b) check the first closing parenthesis against the last indicie of the array
            i) remove the last element from the stack
            ii) check the first closing parhetesis agains tthe last indicie of the stack
                aa) if the closing parenthesis does not match the opening parhetnesis, return false
    4) return true, this is a valid string

*/

const isValid = s => {
    const closing = [')', ']', '}'];
    const opening = ['(', '[', '{'];
    const openingStack = [];

    if (s.length % 2 !== 0) return false
    if (closing.includes(s[0])) return false

    for (let i = 0; i < s.length; i++) {
        if (closing.includes(s[i])) {
            // educate our program on closing and opening parnethesis
            // opening stack -> ['(']
            // s[i] -> ')'

            // is s[i] the correct match for last index in openingStack?
            // 1) reference index value of s[i] in closing Parenthesis
            const currentIndex = closing.indexOf(s[i])
            // outputs 0, 1, or 2
            // 2) reference currentIndex value of opening and compare it to last index in openingStack
            const expectedMatch = opening[currentIndex]
            // output (, [, { 
            const lastElement = openingStack.pop()
            // output (, [, { 
            
            if (expectedMatch !== lastElement) return false

        } else {
            openingStack.push(s[i])
        }

    }
    if (openingStack.length) return false
    
    return true

}

console.log(isValid(')('))
console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('([)]'))