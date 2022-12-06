'use strict';

const LinkedList = require('./codechall');

describe('Linked List', () => {
  let list = new LinkedList();
  it('accepts new nodes as expected', () => {
    list.add('a');
    list.add('b');
    list.add('c');
    // head/node{a} -> node{b} -> {c} -> null
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('c');
  });
});

// add / insert -- at start/ at end
