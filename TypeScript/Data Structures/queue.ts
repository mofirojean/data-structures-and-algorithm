/**
 * Data Structure: Queue
 * Language: Typescript
 */

class Queue<T> {
    private queueList: T[];

    constructor(){
        this.queueList = Array();
    }

    // Returns True if the queue is empty
    isEmpty(): boolean {
        return this.queueList.length == 0;
    }

    // Returns the number of items in the queue
    length(): number {
        return this.queueList.length;
    }

    // Adds the given item to the queue
    enqueue(item: T) {
        this.queueList.unshift(item)
    }

    // Removes and returns the bfirst item in the queue
    dequeue(){
        if (!this.isEmpty()) {
            return this.queueList.pop();
        } else {
            return "Cannot dequeue from an empty queue"
        }
    }
}


//  Driver Method
let queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue("Tester one")
queue.enqueue("Tester Two")
queue.enqueue("Tester three")
queue.enqueue("Tester four")
console.log(queue.dequeue())