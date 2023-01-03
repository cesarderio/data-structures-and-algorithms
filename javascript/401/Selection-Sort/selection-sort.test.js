'use strict';

const {selectionSort} = require('./selection-sort.js');
describe('Selection Sort', () => {
  it('correctly traverses and sorts array of integers', () => {
 
    expect(console.log(selectionSort(arr))).toEqual([4, 8, 15, 16, 23, 42]);
  
  });

  // it('traverse works as expected', () => {
  //   let list = new LinkedList();
  //   list.add('a');
  //   list.add('b');
  //   list.add('c');
  //   expect(list.toString()).toEqual(`{c} -> {b} -> {1} -> NULL`);
  // });