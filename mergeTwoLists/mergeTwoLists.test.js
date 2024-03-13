// Merge Two Sorted Lists Problem Test File

// Constraints:
//  The number of nodes in both lists is in the range [0, 50].
//  -100 <= Node.val <= 100

'use strict';

import { List } from "./List.js";
import mergeTwoLists from "./mergeTwoLists.js";
import { randList } from './utils.js';

const MAX_NODES = 50, MIN_NODES = 0;

function assertMergeLists(actual, expected) {

}

function testMergeLists(n) {
    const list1 = randList(10, true);
    const list2 = randList(10, true);
    const actual = mergeTwoLists(list1.head, list2.head);
    const expected = list1.concat(list2);
    expected.sort();
}

const testCount = 10;
testMergeLists(10);