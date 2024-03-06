// Valid Palindrome Problem

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
//  Open brackets must be closed by the same type of brackets.
//  Open brackets must be closed in the correct order.
//  Every close bracket has a corresponding open bracket of the same type.

// Example 1:
//  Input: s = "()"
//  Output: true

// Example 2:
//  Input: s = "()[]{}"
//  Output: true

// Example 3:
//  Input: s = "(]"
//  Output: false
 
// Constraints:
//  1 <= s.length <= 104
//  s consists of parentheses only '()[]{}'.

'use strict';

function corresponds(prevPar, currPar) {
    switch (prevPar) {
        case '(':
            if (currPar == ')') return true;
            break;
        case '[':
            if (currPar == ']') return true;
            break;
        case '{':
            if (currPar == '}') return true;
            break;
    }
    return false;
}

function isValid(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
            stack.push(s[i]);
        } else {
            if (stack.length == 0) return false;
            if (corresponds(stack[stack.length-1], s[i])) stack.pop();
            else return false;
        }
    }
    return stack.length == 0 ? true : false;
}

export default isValid;