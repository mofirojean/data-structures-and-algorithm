"""
    Data Structure: Stack, LinkedList Stack
    Language: Python
"""


class Stack:
    def __init__(self):
        self._theItems = list()

    # Produces a string representation of the linked list stack
    def __str__(self):
        return str(self._theItems)

    # Returns true if the stack is empty or False otherwise
    def is_empty(self) -> bool:
        return len(self._theItems) == 0

    # Returns the number of items in the stack
    def __len__(self) -> int:
        return len(self._theItems)

    # Returns the top item on the stack without removing
    def peek(self):
        if not self.is_empty():
            return self._theItems[-1]
        else:
            return "Cannot peek at an empty stack"

    # Removes and returns the top item on the stack
    def pop(self):
        if not self.is_empty():
            return self._theItems.pop()
        else:
            return "Cannot pop an empty stack"

    # Push an item onto the top of the stack
    def push(self, item):
        self._theItems.append(item)


# Implementation of the Stack ADT using a singly linked list
class LinkedListStack:
    def __init__(self):
        self._top = None
        self._size = 0

    # Produces a string representation of the linked list stack
    def __str__(self) -> str:
        if self._top is None:
            return "[]"
        else:
            stack_list = "["
            current_node = self._top
            while current_node is not None:
                stack_list = stack_list + str(current_node.item) + " -> "
                current_node = current_node.next
            stack_list = stack_list + "None]"
            return stack_list

    # Returns True if stack is empty or False if otherwise
    def is_empty(self):
        return self._top is None

    # Return the number of items in the stack
    def __len__(self):
        return self._size

    # Returns top item on the stack without removing it
    def peek(self):
        if not self.is_empty():
            return self._top.item
        else:
            return "Cannot peek at an empty stack"

    # Remove and returns the top item in the stack
    def pop(self):
        if not self.is_empty():
            node = self._top
            self._top = self._top.next
            self._size -= 1
            return node.item
        else:
            return "Cannot pop an empty stack"

    # Pushes an item onto the top of the stack
    def push(self, item):
        self._top = _StackNode(item, self._top)
        self._size += 1


#  The Private storage class for creating the stack nodes
class _StackNode:
    def __init__(self, item, link):
        self.item = item
        self.next = link
