'use strict';


// There is no "dog"

// There is no "cat"

// User pref other than "cat" or "dog"


const AnimalShelter = require('./stack-queue-animal-shelter');

describe('AnimalShelter', () => {
  let queue = new AnimalShelter();
  it('accepts new nodes as expected', () => {
    queue.enqueue('dogOne');
    expect(this.value).toEqual('dogOne');
  });

});

describe('Queue', () => {
  let queue = new AnimalShelter();
  it('Can successfully enqueue into a queue', () => {
    queue.enqueue('cat');
    expect(this.value).toEqual('cat');
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    queue.enqueue('catOne');
    queue.enqueue('dogOne');
    queue.enqueue('catTwo');
    expect(this.value).toEqual('catOne');
    expect(this.value).toEqual('dogOne');
    expect(this.value).toEqual('catTwo');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    queue.dequeue('catOne');
    expect(this.value).toEqual('catOne');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    queue.peek();
    expect(this.value).toEqual('catOne');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    queue.dequeue('catOne');
    queue.dequeue('dogOne');
    queue.dequeue('catTwo');
    expect(this.value).toEqual(null);
  });

  it('Can successfully instantiate an empty queue', () => {
    queue.isEmpty();
    expect(this.value).toEqual(true);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    queue.dequeue('dogOne');
    queue.peek();
    expect(this.value).toEqual(true);
    expect(this.value).toEqual(true);
  });

});

