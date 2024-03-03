// Two Sum Problem Test

'use strict';

import twoSum from './twoSum.js';
import { Worker, isMainThread } from 'worker_threads'

function assertTwoSum(actual, expected, message) {
    if (actual.length !== expected.length || JSON.stringify(actual) !== JSON.stringify(expected)) {
        console.log(message, 'FAIL');
        console.error('Expected: ',  expected);
        console.error('Actual: ', actual, '\n');
        return false;
    }

    console.error(message, 'PASS');
    // console.error('Expected: ',  expected);
    // console.error('Actual: ', actual, '\n');
    return true;
}

function testTwoSum(n=0) {
    // User-generated tests
    if(n === 0) {
        const testcases = [
            // nums, target, expected
            [[2,7,11,15], 9, [0,1]],
            [[2,5,5,11], 10, [1,2]],
            [[1,2,3,4,5], 8, [2,4]],
            [[1,3,0,3], 3, [1,2]],
            [[1,0,0,3], 0, [1,2]],
            [[-2,-6], -8, [0,1]],
            [[-2,1,3,-6,0], 1, [0,2]],
        ];

        testcases.forEach((testcase, i) => {
            const [nums, target, expected] = testcase;
            const actual = twoSum(nums, target);
            assertTwoSum(actual, expected, `Test case ${i+1}: `);
        });

        return true;
    }

    // Randomly-generated tests
    // In constraints, the length of nums can get fairly large (2 <= nums.length <= 100_000)
    // With thousands of tests, can be CPU heavy
    // if (isMainThread) {
        const workers = [];
        for (let i = 0; i < n; i++) {
            workers.push(new Worker('./worker.js'));
            workers[i].postMessage(null);
            workers[i].on('message', message => {
                assertTwoSum(...message, `Test ${i+1}: `);
                workers[i].terminate();
            });
        }
    // } 
}

switch (process.argv.length) {
    case 2:
        // For user-generated tests
        testTwoSum();
        break;
    case 3:
        // For randomly-generated tests
        testTwoSum( Number(process.argv[2]) );
        break;
    default:
        console.error("Usage: node twoSum.test.js [NUM_TESTS]");
}
