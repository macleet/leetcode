// Two Sum Problem Test

'use strict';

import twoSum from "./twoSum.js";

// Global constants
// Constraints:
//      2 <= nums.length <= 10^4
//      -10^9 <= nums[i] <= 10^9
//      -10^9 <= target <= 10^9
//      Only one valid answer exists.
const MAX_LEN = 10**4, MIN_LEN = 2;
const TARGET_MAX = 10**9, TARGET_MIN = -1 * 10**9;

/* 
* Generates random nums array according to problem constraints
* Random numbers, random lengths, random targets.
*
* Arguments:
*   n: number of arrays to create
*
* Output: array of random nums array
*/
function generateNums(n=1) {
    for (const i = 0; i < n; i++) {
        const length = Math.random(MIN_LEN, MAX_LEN + 1);
    }
}

function testTwoSum() {

}