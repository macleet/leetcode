import { parentPort } from "worker_threads";
import twoSum from './twoSum.js';

// Global constants
// Constraints:
//      2 <= nums.length <= 10^4
//      -10^9 <= nums[i] <= 10^9
//      -10^9 <= target <= 10^9
//      Only one valid answer exists.

const MAX_LEN = 10**4, MIN_LEN = 2;
const TARGET_MAX = 10**9, TARGET_MIN = -1 * 10**9;

function getRandExpected(len) {
    const i = Math.random() * (len - 1);
    let j = Math.random() * (len - 1);
    while (Math.floor(i) == Math.floor(j)) j = Math.random() * (len - 1);
    return [Math.floor(i), Math.floor(j)];
}

function getRandResults() {
    let nums = [];

    // Generates random nums array according to problem constraints
    // Random numbers, random lengths, random targets.
    const randLen = Math.random() * (MAX_LEN - MIN_LEN + 1) + MIN_LEN;
    for (let i = 0; i < randLen; i++) {
        const randNum = Math.floor(Math.random() * (TARGET_MAX/2 - TARGET_MIN/2) + TARGET_MIN/2 + 1);
        nums.push(randNum);
    }
    
    const expected = getRandExpected(randLen);
    const target = nums[expected[0]] + nums[expected[1]];
    const actual = twoSum(nums, target)

    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        // Double loop in order to find all targets
        // Need all targets to find the first instance of two sum target, rather than a latter one
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) { // while loopify?
                const currTarget = nums[i] + nums[j];
                if (currTarget === target) return [actual, [i, j]];
            }
        }
    }
    return [actual, expected];
}

parentPort.on('message', () => {
    const results = getRandResults();
    parentPort.postMessage(results);
});