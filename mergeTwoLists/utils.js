'use strict';

import { List } from "./List.js";

export function randList(n, sort = false) {
    let randNums = [];
    for (let i = 0; i < n; i++) {
        const randNum = Math.round(Math.random() * 200 - 100);
        randNums.push(randNum);
    }
    const randList = new List();
    if (sort) randNums.sort((a, b) => { return a - b })
    randList.append(...randNums);
    return randList;
}

export function findPivot(head, tail) {
    let pivot = head;
    let fast = head;
    while (fast && fast.next) {
        pivot = pivot.next;
        fast = fast.next.next;
    }
    const pivots = [head, tail, pivot].sort((a, b) => { return a.val-b.val });

    switch(pivots[1]) {
        case tail: break;
        case head:
            head = pivot.next;
            tail.next = pivot;
            head.prev = null;
            pivot.next = null;
            break;
        default:
            pivot.prev.next = pivot.next;
            pivot.next.prev = pivot.prev;
            tail.next = pivot;
            pivot.next = null;
            pivot.prev = tail;
            tail = pivot;
    }

    return pivots[1];  // return median of three pivots
}

export function swapNodes() {

}
