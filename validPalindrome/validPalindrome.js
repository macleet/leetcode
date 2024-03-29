// LeetCode Problem + Solution:  Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and 
// removing all non-alphanumeric characters, it reads the same forward and backward. 
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
//  Input: s = "A man, a plan, a canal: Panama"
//  Output: true
//  Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
//  Input: s = "race a car"
//  Output: false
//  Explanation: "raceacar" is not a palindrome.

// Example 3:
//  Input: s = " "
//  Output: true
//  Explanation: s is an empty string "" after removing non-alphanumeric characters.
//  Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:
//  1 <= s.length <= 2 * 105
//  s consists only of printable ASCII characters.

/**
 * 
 * @param {string} c 
 * @returns {boolean}
 */
function isAlphanumeric(c) {
    const charCode = c.charCodeAt(0);
    // console.log(charCode)
    switch (true) {
        case charCode > 47 && charCode < 58:   return true;  // Numbers
        case charCode > 64 && charCode < 91:   return true;  // Uppercase alphabets
        case charCode > 96 && charCode < 123:  return true;  // Lowercase alphabets
        default:  return false;
    }
}

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    let left = 0;
    let right = s.length-1;
    while (left <= right) {
        // Check left pointer character is alphanumeric
        if (!isAlphanumeric(s[left])) {
            left++;
            continue;
        }

        // Check right pointer character is alphanumeric
        if (!isAlphanumeric(s[right])) {
            right--;
            continue;
        }

        // Check if palindromic
        if (s[left].toLowerCase() !== s[right].toLowerCase())  return false;
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome('$$Aa$$bb/%#$#$?#$#?$aa'));