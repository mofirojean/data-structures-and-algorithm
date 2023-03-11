class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor(comparator) {
        this.head = null;
        this.comparator = comparator;
    }
    // insert item intothe list
    insert(data) {
        if (!this.head) {
            this.head = new ListNode(data);
        }
        else {
            let curNode = this.head;
            while (curNode.next != null) {
                curNode = curNode.next;
            }
            curNode.next = new ListNode(data);
        }
    }
    // removing an item from a linked list
    delete(data) {
        if (!this.head)
            return;
        // checks if the head node is the node to be removed 
        if (this.comparator(this.head.data, data)) {
            this.head = this.head.next;
            return;
        }
        let curNode = this.head.next;
        let prevNode = this.head;
        /**
     * Search for the node to be removed and keep track of its previous node
     *
     * If it were a double linked list, we could simply search the node
     * and it would have a pointer to the previous node
     **/
        while (curNode) {
            if (this.comparator(curNode.data, data)) {
                curNode = null;
            }
            else {
                prevNode = curNode;
                curNode = curNode.next;
            }
        }
        /**
     * set previous.next to the target.next, if the node target is not found,
     * the 'previous' will point to the last node,
     * since the last node hasn't next, nothing will happen
     **/
        prevNode.next = prevNode.next ? prevNode.next.next : null;
    }
    // search for an item in the list
    search(data) {
        let curNode = this.head;
        while (curNode) {
            if (this.comparator(curNode.data, data)) {
                return curNode;
            }
            curNode = curNode.next;
        }
        return null;
    }
    // traversing the linked list
    traverse() {
        let curNode = this.head;
        while (curNode != null) {
            console.log(curNode.data);
            curNode = curNode.next;
        }
    }
}


// main function
let list = new LinkedList()
