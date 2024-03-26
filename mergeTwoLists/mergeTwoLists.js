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
    // Base cases
    if (!list1 && !list2)   return null;
    else if (!list1)        return list2;
    else if (!list2)        return list1;

    let mergedHead = null, mergedTail = null;
    while(list1 && list2) {
        // Merge logic
        const curr = list1.val < list2.val ? list1 : list2;
        if (!mergedHead && !mergedTail) {   // If merged list is empty
            mergedHead = curr;
            mergedTail = curr;
            (curr == list1) ? list1 = curr.next : list2 = curr.next; 
            continue;
        }
        mergedTail.next = curr;
        mergedTail = curr;
        (curr == list1) ? list1 = curr.next : list2 = curr.next; 
    }
    mergedTail.next = list1 || list2;
    return mergedHead;  
}

export default mergeTwoLists;