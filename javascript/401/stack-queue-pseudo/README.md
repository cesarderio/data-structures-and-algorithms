# Stacks and Queues

A stack is a data stucture that consists of Nodes. ( A stack of Nodes).
A Queue is a data structure that consists of Nodes, similar but different; i.e. (A queue can be thought of as a line(line to get into a store for example.).)

### Common stack terms

**PUSH** - Nodes that are put into the *stack* are "pushed" into the *stack*.

**POP** - Nodes removed from the *stack* are "popped" off the *stack*.

**TOP** - Top of the *stack*.

**PEEK** - You can "peek" at the value of the *HEAD*/top Node in the *stack*.

**isEmpty** - If the stack is empty it returns *true*, otherwise *false*.

**FILO** - **F**irst **I**n **L**ast **O**ut.

**LIFO** - **L**ast **I**n **F**irst **O**ut.

### Common Queue terms

**Enqueue** - Nodes or items that are added to the queue.

**Dequeue** - Nodes or items that are removed from the queue. If called when the queue is empty an exception will be raised.

**Front** - This is the front/first Node of the queue.

**Rear** - This is the rear/last Node of the queue.

**Peek** - When you peek you will view the value of the front Node in the queue. If called when the queue is empty an exception will be raised.

**IsEmpty** - returns true when queue is empty otherwise returns false.

**FIFO** - First In First Out
  The first item in the queue will be the first item out of the queue.

**LILO** - Last In Last Out
  This means that the last item in the queue will be the last item out of the queue.

## Challenge

New Implementation of Stacks and Queues.

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

## Approach & Efficiency

Big 0 space/time will be dependent on size/length/count of list/stack/queue.

## API

#### Node

* Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

#### Stack

* Create a Stack class that has a top property. It creates an empty Stack when instantiated.

  * This object should be aware of a default empty value assigned to top when the stack is created.
  * The class should contain the following methods:

  * **Push**
    * Arguments: value
    * Adds a new node with that value to the top of the stack with an O(1) Time performance.

  * **Pop**
    * Arguments: none
    * Returns: the value from node from the top of the stack
    * Removes the node from the top of the stack
    * Should raise exception when called on empty stack

  * **Peek**
    * Arguments: none
    * Returns: Value of the node located at the top of the stack
    * Should raise exception when called on empty stack

  * **isEmpty**
    * Arguments: none
    * Returns: Boolean indicating whether or not the stack is empty.

#### Queue

* Create a Queue class that has a front property. It creates an empty Queue when instantiated.

  * This object should be aware of a default empty value assigned to front when the queue is created.

  * The class should contain the following methods:

  * **Enqueue**
    * Arguments: value
    * Adds a new node with that value to the back of the queue with an O(1) Time performance.

  * **Dequeue**
    * Arguments: none
    * Returns: the value from node from the front of the queue
      *Removes the node from the front of the queue
      *Should raise exception when called on empty queue

  * **Peek**
    * Arguments: none
    * Returns: Value of the node located at the front of the queue
    * Should raise exception when called on empty stack

  * **isEmpty**
    * Arguments: none
    * Returns: Boolean indicating whether or not the queue is empty
