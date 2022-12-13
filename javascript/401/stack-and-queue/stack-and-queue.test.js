'use strict';

const LinkedList = require('./stack-and-queue');
const Stack = require('./stack-and-queue');
const Queue = require('./stack-and-queue');

describe('Linked List', () => {
  let list = new LinkedList();
  it('accepts new nodes as expected', () => {
    list.append('a');
    list.append('b');
    list.append('c');
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('c');
  });

  it('adds new node to head as expected', () => {
    list.insert('a');
    expect(list.head.value).toEqual('a');
  });
});

describe('Stack', () => {
  let stackOne = new Stack();
  it('Can successfully push onto a stack', () => {
    stackOne.push(1);
    expect().toEqual(1);
  });

  it('Can successfully push multiple values onto a stack', () => {
    stackOne.push(1);
    stackOne.push(2);
    stackOne.push(3);
    expect().toEqual(1, 2, 3);
  });

  it('Can successfully pop off the stack', () => {
    stackOne.pop(1);
    expect().toEqual(1);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    stackOne.pop(1);
    expect().toEqual(1);
  });

  it('Can successfully peek the next item on the stack', () => {
    stackOne.pop(1);
    expect().toEqual(1);
  });

  it('Can successfully instantiate an empty stack', () => {
    stackOne.pop(1);
    expect().toEqual(1);
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    stackOne.pop(1);
    expect().toEqual(1);
  });

});

describe('Queue', () => {
  let queueOne = new Queue();
  it('Can successfully enqueue into a queue', () => {
    queueOne.enqueue('a');
    expect(this.value).toEqual('a');
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    queueOne.enqueue('a');
    queueOne.enqueue('b');
    queueOne.enqueue('c');
    expect(this.value).toEqual('a');
    expect(this.value).toEqual('c');
    expect(this.value).toEqual('c');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    queueOne.dequeue('a');
    expect(this.value).toEqual('a');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    queueOne.peek();
    expect(this.value).toEqual('a');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    queueOne.dequeue('a');
    queueOne.dequeue('b');
    queueOne.dequeue('c');
    expect(this.value).toEqual(null);
  });

  it('Can successfully instantiate an empty queue', () => {
    queueOne.isEmpty();
    expect(this.value).toEqual(true);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    queueOne.dequeue('a');
    queueOne.peek();
    expect(this.value).toEqual(true);
    expect(this.value).toEqual(true);
  });

});

