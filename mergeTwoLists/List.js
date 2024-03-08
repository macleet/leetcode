'use strict';

export class ListNode {
    constructor(val = null) {
        this.val = val;
        this.next = null;
    }
}

export class List {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(...vals) {
        vals.forEach(val => {
            const newNode = new ListNode(val);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
                return;
            }
            this.tail.next = newNode;
            this.tail = newNode;
        });
    }

    print() {
        let currNode = this.head;
        process.stdout.write('[');
        while (currNode) {
            process.stdout.write(currNode.val.toString());
            currNode = currNode.next;
            if(currNode) process.stdout.write(', ');
        }
        console.log(']');
    }
}
