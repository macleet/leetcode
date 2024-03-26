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
    List.print(expected);
    process.stdout.write('\tActual merged list:    ');
    List.print(actual);

    process.stdout.write('\tTest result:           ');
    if (List.isEqual(actual, expected))  {
        console.log('\u001b[' + 32 + 'm' + 'PASS' + '\u001b[0m');
        return false;
    }
    console.log('\u001b[' + 31 + 'm' + 'FAIL' + '\u001b[0m');
    return true;
}

function testMergeLists(n) {
    for (let i = 0; i < n; i++) {
        const rand1 = Math.round(Math.random() * MAX_NODES);
        const rand2 = Math.round(Math.random() * MAX_NODES);

        const list1 = randList(rand1, true);
        const list2 = randList(rand2, true);

        const l1Copy = List.copy(list1.head);
        const l2Copy = List.copy(list2.head);
        const expected = List.copy(l1Copy.concat(l2Copy.head, l2Copy.tail));
        expected.sort();
        const actual = mergeTwoLists(list1.head, list2.head); 

        console.log(`Test ${i+1}:`);
        process.stdout.write('\tSorted list 1:         ');
        list1.print();
        process.stdout.write('\tSorted list 2:         ');
        list2.print();
    
        if (assertMergeLists(actual, expected.head)) break;
    }
}

const testCount = 5000;
testMergeLists(testCount);
