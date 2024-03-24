// Merge Two Sorted Lists Solution

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
//  Input: list1 = [1,2,4], list2 = [1,3,4]
//  Output: [1,1,2,3,4,4]

// Example 2:
//  Input: list1 = [], list2 = []
//  Output: []

// Example 3:
//  Input: list1 = [], list2 = [0]
//  Output: [0]

// Constraints:
//  The number of nodes in both lists is in the range [0, 50].
//  -100 <= Node.val <= 100
//  Both list1 and list2 are sorted in non-decreasing order.

import { ListNode, List } from "./List.js";

/**
 * @param {ListNode} list1 
 * @param {ListNode} list2
 */
function mergeTwoLists(list1, list2) {
    const testing = arguments[2];  // bool on test mode on/off (undefined if no arg given)
    testing && console.log('\nTesting merge two sorted lists:\n');

    let [curr1, curr2] = [list1, list2];
    const newList = new List();
    while(curr1 && curr2) {
        
        if (testing) {  // Purely for tests
            process.stdout.write('\nSorted list 1:      ');
            List.print(list1, curr1);
            process.stdout.write('\u001b[' + 35 + 'm' + curr1.val + '\u001b[0m ');
            List.print(curr1.next);
            
            process.stdout.write('Sorted list 2:      ');
            List.print(list2, curr2);
            process.stdout.write('\u001b[' + 33 + 'm' + curr2.val + '\u001b[0m ');
            List.print(curr2.next);
        }

        // Merge logic
        if (curr1.val >= curr2.val) {
            testing && console.log('\nValue2 <= Value1:   Add', '\u001b[' + 33 + 'm' + curr2.val + '\u001b[0m');
            newList.append(curr2.val);
            testing && process.stdout.write('Merged list:        ') + newList.print();
            curr2 = curr2.next;     
        } else {    
            testing && console.log('\nValue1 < Value2:    Add', '\u001b[' + 35 + 'm' + curr1.val + '\u001b[0m');
            newList.append(curr1.val);
            testing && process.stdout.write('Merged list:        ') + newList.print();
            curr1 = curr1.next;
        }
    }
    let curr = curr1 ?? curr2;

    const remList = [];
    while(curr) {
        remList.push(curr.val)
        curr = curr.next;
    }
    newList.append(...remList.sort());
    
    testing && process.stdout.write('Merged list:        ') + newList.print();
    
    return newList;
}

export default mergeTwoLists;