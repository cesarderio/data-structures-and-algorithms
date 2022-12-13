'use strict';

// There is no "dog"
// There is no "cat"
// User pref other than "cat" or "dog"
const AnimalShelter = require('./stack-queue-animal-shelter');
// const Queue = require('./stack-queue-animal-shelter');


describe('AnimalShelter', () => {
  let queue = new AnimalShelter();
  it('Can successfully enqueue into a queue', () => {
    queue.enqueue('catOne');
    expect(queue.items).toEqual(['catOne']);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    // queue.enqueue('catOne');
    queue.enqueue('dogOne');
    queue.enqueue('catTwo');
    expect(queue.items).toEqual(['catOne', 'dogOne', 'catTwo']);

  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    queue.dequeue('catOne');
    expect().toEqual(['dogOne', 'catTwo']);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    queue.peek();
    expect().toEqual('catOne');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    queue.dequeue('catOne');
    queue.dequeue('dogOne');
    queue.dequeue('catTwo');
    expect(this.items).toEqual(null);
  });

  it('Can successfully instantiate an empty queue', () => {
    queue.isEmpty();
    expect(queue.items).toEqual(true);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    queue.dequeue('dogOne');
    queue.peek();
    // expect(this.items).toEqual(true);
    expect(queue.items).toEqual(true);
  });

});

