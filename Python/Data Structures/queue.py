"""
    Data Structure: Queue
    Language: Python
"""


class Queue:

    def __init__(self):
        self._queueList = list()

    # Returns true if the queue is empty
    def isEmpty(self):
        return len(self._queueList) == 0

    # Returns the number of items in the queue
    def __len__(self):
        return len(self._queueList)

    # Adds the given item to the queue
    def enqueue(self, item):
        self._queueList.append(item)

    # Removes and returns the first item in the queue
    def dequeue(self):
        if not self.isEmpty():
            return self._queueList.pop()
        else:
            return "Cannot dequeue from an empty queue."
