'use strict';

const LinkedList = require('../index');

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

  it('returns a string representing all the values in the Linked List', () => {
    list.toString();
    expect(list).toEqual('{ a } -> { b } -> { c } -> NULL');
  });

  // it('checks for empty linked list', () => {

  // });

  // it('The head properly points to first node in the linked list', () => {
  //   list;
  //   return;
  // });
  // it('properly insert multiple nodes into the linked list', () => {

  // });
  // it('Will return true when finding a value within the linked list that exists', () => {

  // });
  // it('Will return false when searching for a value in the linked list that does not exist', () => {

  // });
  // it('Can properly return a collection of all the values that exist in the linked list', () => {

  // });
});


// -Can properly insert multiple nodes into the linked list
// -Will return true when finding a value within the linked list that exists
// -Will return false when searching for a value in the linked list that does not exist
// -Can properly return a collection of all the values that exist in the linked list
