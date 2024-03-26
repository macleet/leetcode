// Merge Two Sorted Lists Problem Test File

// Constraints:
//  The number of nodes in both lists is in the range [0, 50].
//  -100 <= Node.val <= 100

import mergeTwoLists from "./mergeTwoLists.js";
import { List } from "./List.js";
import { randList } from './utils.js';

const MAX_NODES = 50;

function assertMergeLists(actual, expected) {
    process.stdout.write('\tExpected merged list:  ');
    expected.print();
    process.stdout.write('\tActual merged list:    ');
    actual.print();

    process.stdout.write('\tTest result:           ');
    if (actual.isEqual(expected.head))  {
        console.log('\u001b[' + 32 + 'm' + 'PASS' + '\u001b[0m');
        return false;
    }
    console.log('\u001b[' + 31 + 'm' + 'FAIL' + '\u001b[0m');
    return true;
}

function testMergeLists(n) {
    for (let i = 0; i < n; i++) {
        const list1 = randList(10, true);
        const l1Copy = List.copy(list1);
        const list2 = randList(10, true);
        const l2Copy = List.copy(list2);

        console.log(`Test ${i+1}:`);
        process.stdout.write('\tSorted list 1:         ');
        list1.print();
        process.stdout.write('\tSorted list 2:         ');
        list2.print();
    
        const actual = mergeTwoLists(list1.head, list2.head);
        const expected = list1.concat(list2);
        expected.sort();
    
        if (assertMergeLists(actual, expected))  {
            mergeTwoLists(l1Copy.head, l2Copy.head, true);
            break;
        }
    }
}

const testCount = 1000;
testMergeLists(testCount);
