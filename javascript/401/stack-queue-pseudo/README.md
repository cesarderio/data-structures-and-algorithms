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

Code Challenge / Algorithm

## Approach & Efficiency

Big 0 space/time will be dependent on size/length/count of list/stack/queue.

## Feature Tasks

##### Create a new class called pseudo queue

* Do not use an existing Queue.

* Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below),

* Internally, utilize 2 **Stack** instances to create and manage the queue

##### Methods

* Enqueue

  * Arguments: value

  * Inserts a **value** into the PseudoQueue, using a *first-in*, *first-out* approach.

* Dequeue

  * Arguments: none

  * Extracts a **value** from the PseudoQueue, using a first-in, first-out approach.
