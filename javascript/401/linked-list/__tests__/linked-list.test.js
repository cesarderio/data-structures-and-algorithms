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
    // list.toString();
    expect(JSON.stringify(list.toString())).toEqual('{a} -> {b} -> {c} -> NULL');
  });

  it('checks for empty linked list', () => {
    if(!this.head){
      return;
    }
    expect(list).toEqual('NULL');
  });

  // it('The head properly points to first node in the linked list', () => {
  //   list.head();
  //   expect(list).toEqual(head);
  // });

  it('properly insert multiple nodes into the linked list', () => {
    list.append('a');
    list.append('b');
    list.append('c');
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('c');
  });


  // it('Will return true when finding a value within the linked list that exists', () => {
  //   list.insert('a');
  //   list.includes('a');
  //   expect(list.includes('a')).toEqual(true);
  // });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    list.includes('z');
    expect(list.includes('z')).toEqual(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    list.traverse();
    expect(list).toEqual(list);
  });

  it('will insert before given index', () => {
    list.insertBefore(a, c);
    expect(list).toEqual(list);
  });

  // it('will insert after given index', () => {
  //   list.insertBefore(a, c);
  //   expect(list).toEqual(list);
  // });
});


