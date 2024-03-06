'use strict';

import isValid from './validParenthesis.js';

//  Constraint: 1 <= s.length <= 104
// const MIN_LEN = 1, MAX_LEN = 104, NUM_PAREN = 6;

function assertIsValid(actual, expected) {
    if (actual.length !== expected.length || JSON.stringify(actual) !== JSON.stringify(expected)) {
        console.log('FAIL');
        console.log('Expected: ', expected);
        console.log('Actual: ', actual, '\n');
        return false;
    } 
    console.log('PASS');
    return true;
}

function testIsValid() {
    const testcases = [
        ['()', true],
        ['()[]{}', true],
        ['(]', false],
        ['((()))', true],
        ['({)}', false],
        ['())', false],
        ['][', false],
        ['(', false],
        [')', false],
        ['', true],
        ['hello', false]
    ];
    
    testcases.forEach(testcase => {
        const [testStr, expected] = testcase;
        const actual = isValid(testStr);
        assertIsValid(actual, expected);
    });
}

testIsValid();