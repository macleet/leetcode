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

'use strict';

import { ListNode, List } from "./List.js";

/**
 * @param {ListNode} list1 
 * @param {ListNode} list2
 */
function mergeTwoLists(list1, list2) {
    let [curr1, curr2] = [list1, list2];
    const newList = new List();
    while(curr1 && curr2) {
        // console.log(curr1.val, curr2.val)
        if (curr1.val >= curr2.val) {
            newList.append(curr2.val);
            curr2 = curr2.next;     
        } else {    
            newList.append(curr1.val);
            curr1 = curr1.next;
        }
    }
    let curr = curr1 ?? curr2;

    const remList = [];
    while(curr) {
        remList.push(curr.val)
        curr = curr.next;
    }
    newList.append(...remList.sort())
    return newList;
}

export default mergeTwoLists;