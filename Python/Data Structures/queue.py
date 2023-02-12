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


class PriorityQueue:
    """Creates an empty unbounded priority queue"""
    def __init__(self):
        self._queueList = list()

    # Returns True if the queue is empty
    def isEmpty(self):
        return len(self._queueList) == 0

    # Returns the number of items in the queue
    def __len__(self):
        return len(self._queueList)

    # Adds the given item to the queue
    def enqueue(self, _item, priority):
        """Create a new instance of the storage cass and append it to the list"""
        entry = _PriorityQueue(_item, priority)
        self._queueList.append(entry)

    # Remove and returns the first item in the queue
    def dequeue(self):
        if not self.isEmpty():
            """Find the entry with highest priority"""
            highest = self._queueList[0].priority
            for i in range(len(self._queueList)):
                """See if the ith entry contains a higher priority (smaller integer)."""
                if self._queueList[i].priority < highest:
                    highest = self._queueList[i].priority
            # Remove the entry with the highest priority and return them
            entry = self._queueList.pop(highest)
            return entry.item
        else:
            return "Cannot dequeue from an empty queue"


class _PriorityQueue:
    def __init__(self, _item, priority):
        self.item = _item
        self.priority = priority


if __name__ == "__main__":
    Q = PriorityQueue()
    Q.enqueue("purple", 5)
    Q.enqueue("black", 1)
    Q.enqueue("orange", 3)
    Q.enqueue("white", 0)
    Q.enqueue("green", 1)
    Q.enqueue("yellow", 5)
    while not Q.isEmpty():
        item = Q.dequeue()
        print(item)
