/**
 * Data Structure: Stack
 * Language: Typescript
 */

class Stack<T> {
    private listOfItems: T[];

    constructor(){
        this.listOfItems = Array()
    }

    // Returns True if the stack is empty and False if otherwise
    isEmpty(): boolean {
        return this.listOfItems.length == 0;
    }

    // Return the number of items in the Stack
    length(): number {
        return this.listOfItems.length;
    }

    // Returns the top item on the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return "Cannot peek at an empty stack";
        } else {
            return this.listOfItems[-1]
        }
    }

    // return and remove the top item in the stack
    pop() {
        if (this.isEmpty()) {
            return "Cannot pop an empty stack";
        } else {
            return this.listOfItems.pop()
        }
    }

    //  Push an item onto the top of the stack
    push(item: T): void {
        this.listOfItems.push(item)

    }

}


// Driver Method
let stack = new Stack()
console.log(stack.isEmpty());
stack.push(10);
stack.push("str");
console.log(stack.length())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
