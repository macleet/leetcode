export class ListNode {
    constructor(val = null) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

export class List {
    constructor(head = null) {
        this.head = null;
        this.tail = null;
        let curr = head;
        while (curr) {
            this.append(curr.val);
            curr = curr.next;
        }
    }

    static copy(head) {
        return new List(head);
    }

    *[Symbol.iterator]() {
        let currNode = this.head;
        return {
            next() {
                if (!currNode) return { value: undefined, done: true }; 
                const returnValue = {
                    value: currNode.val,
                    done: false,
                }
                currNode = currNode.next;
                return returnValue;
            }
        }
    }

    static isEqual(head1, head2) {
        let curr1 = head1
        let curr2 = head2;
        while (curr1 && curr2) {
            if (curr1.val !== curr2.val)  return false;
            curr1 = curr1.next;
            curr2 = curr2.next;
        }
        if (curr1 || curr2)  return false;
        return true; 
    }

    isEqual(head) {
        let curr1 = this.head;
        let curr2 = head;
        while (curr1 && curr2) {
            if (curr1.val !== curr2.val)  return false;
            curr1 = curr1.next;
            curr2 = curr2.next;
        }
        if (curr1 || curr2)  return false;
        return true; 
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
            newNode.prev = this.tail;
            this.tail = newNode;
        });
    }

    concat(head, tail) {
        if (!this.head || !this.tail) return head;
        else if(!head) return this.head;
        this.tail.next = head;
        this.tail.next.prev = this.tail;
        this.tail = tail;
        return this.head;
    }

    // Moves node to poistion after prevNode
    moveAfter(prevNode, node) {
        if (!prevNode || !node || prevNode == node || prevNode.next === node)  return;

        node.prev ? node.prev.next = node.next : this.head = node.next;
        node.next ? node.next.prev = node.prev : this.tail = node;

        [node.prev, node.next, prevNode.next] = [prevNode, prevNode.next, node];
        if (node.next)  node.next.prev = node;
    }

    swap(node1, node2) {
        // Base cases
        if (!node1 || !node2 || node1 === node2) return;

        // Swap pointers of swapped nodes
        [node1.prev, node1.next, node2.prev, node2.next] = 
            node1.next === node2 && [node2, node2.next, node1.prev, node1] ||
            node1.prev === node2 && [node2.prev, node2, node1, node1.next] ||
            [node2.prev, node2.next, node1.prev, node1.next];
        
        // Swap pointers of the nodes next to swapped nodes
        if (node1.prev)  node1.prev.next = node1;
        if (node1.next)  node1.next.prev = node1;
        if (node2.prev)  node2.prev.next = node2;
        if (node2.next)  node2.next.prev = node2;

        // Set node to head/tail of list, if applicable
        [node1, node2].forEach(node => {
            if (!node.prev) this.head = node;
            if (!node.next) this.tail = node;
        });
    }

    // Swaps are done in-place, no extra memory used
    #partition(left, right) {
        // Find "middle" pivot with fast & slow pointers
        let pivot = left;
        let fast = left;
        while (fast && fast.next) {
            pivot = pivot.next;
            fast = fast.next.next;
        }

        // Get median of three pivots
        pivot = [left, right, pivot].sort((a, b) => { return a.val-b.val })[1];

        // Reassign left and right nodes according to pivot chosen
        switch (pivot) {
            case right: break;
            case left:
                left = left.next;
                this.moveAfter(right, pivot);
                right = pivot;
                break;
            default:
                this.moveAfter(right, pivot);
                right = pivot;
        }

        // Compare list node values with pivot value and swap accordingly
        let current = left, index = left;
        while (current !== right) {
            if (current.val < pivot.val) {
                this.swap(current, index);
                if (index === left)     left = current;     //  When the index pointer is pointing to the left node, reassign left pointer
                if (current === right)  right = index;      //  If the current pointer points to the right node, reassign right pointer
                [current, index] = [index, current];        //  Switch 
                index = index.next;
            }
            current = current.next;
        }
        this.swap(pivot, index);
        if (left === index && right === pivot) left = pivot;    // Reassign left pointer to pivot if swapped
        right = index;                                          // Reassign right pointer to index after swap
        return [left, pivot, right];
    }

    #quicksort(left, right) {
        if (left == right || left.prev == right) return;               // Base case
        const [l, pivot, r] = this.#partition(left, right);             // Select pivot + new left and right pointers reflecting swaps
        if (l !== r && pivot.prev)  this.#quicksort(l, pivot.prev);     // Sort left partition
        if (l !== r && pivot.next)  this.#quicksort(pivot.next, r);     // Sort right partition
    }

    sort() {
        if (!this.head || !this.tail || this.head == this.tail) return;
        this.#quicksort(this.head, this.tail);  // Start quick sort algorithm
    }

    print(reverse = false) {
        let currNode = reverse ? this.tail : this.head;
        process.stdout.write('[');
        while (currNode) {
            process.stdout.write(currNode.val.toString());
            currNode = reverse ? currNode.prev : currNode.next;
            if(currNode) process.stdout.write(', ');
        }
        console.log(']');
    }

    static print(head, tail = null, reverse = false) {
        let currNode = reverse ? tail : head;
        while (currNode !== tail) {
            process.stdout.write(currNode.val.toString());
            currNode = reverse ? currNode.prev : currNode.next;
            if(currNode) process.stdout.write(', ');
        }
        !tail && console.log();
    }
}
