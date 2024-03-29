// LeetCode Problem and Solution:  Valid Anagram
//  Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 

// Example 1:
//  Input: s = "anagram", t = "nagaram"
//  Output: true

// Example 2:
//  Input: s = "rat", t = "car"
//  Output: false

// Constraints:
//  1 <= s.length, t.length <= 5 * 104
//  s and t consist of lowercase English letters.

function createIndex(s) {
    const index = {};
    const discovered = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (!discovered.includes(c))  discovered.push(c);
        if (!index[c]) {
            index[c] = 1;
            continue;
        }
        index[c]++;
    }
    return [index, discovered];
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    const [s1, d1] = createIndex(s);
    const [s2, d2] = createIndex(t);
    
    if (d1.length !== d2.length)  return false;
    const discovered = new Set(d1, d2);  

    for (let c of discovered)
        if (!s1[c] || !s2[c] || s1[c] !== s2[c])  return false;
    
    return true;
}

console.log(isAnagram('anagram', 'nagaramZ'));