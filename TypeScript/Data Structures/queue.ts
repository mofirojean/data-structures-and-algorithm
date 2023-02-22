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


// Implementation of a priority queue
class PriorityQueue<PriorityEntry> {
    // create an empty unbounded
    constructor(
        private qList: PriorityEntry[]
    ){}

    // Returns true if the queue is emmpty
    isEmpty(): boolean {
        return this.qList.length == 0;
    }

    // returns the number of items in the queue
    length(): number {
        return this.qList.length;
    }

    // Adds a given item to the queue
    enqueue(queueItem: PriorityEntry){
        const entry: PriorityEntry = queueItem
        this.qList.push(entry)
    }

    // Removes and returns the first item in the queue
    dequeue() {
        let highest:number = 0
        for (let i = 0; i < this.qList.length; i++) {
            if (this.qList[i].priority < highest){
                highest = this.qList[i].priority
            }
        }
        return this.qList.splice(highest, 1)
    }
}

// Private class for storing the associaing queue items with thier priority
interface PriorityEntry {
    item: string,
    priority: number
}

const list: PriorityEntry[] = [
    {item: "hello", priority: 1},
    {item: "master", priority: 2},
    {item: "look", priority: 3},
]

console.log(list[0].priority)

//  Driver Method
let queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue("Tester one")
queue.enqueue("Tester Two")
queue.enqueue("Tester three")
queue.enqueue("Tester four")
console.log(queue.dequeue())