'use strict';

const { merge, mergeSort, logArray } = require('./mergeSort');

describe('It splits, sorts and merges properly', () => {
  it('merges and sorts correctly', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let arr_size = arr.length;
    expect(mergeSort(arr, 0, arr_size - 1)).toEqual('[ 4, 8, 15, 16, 23, 42 ]');
  });
  it('it console logs correctly', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let arr_size = arr.length;
    expect(logArray(arr, arr_size)).toEqual('[ 4, 8, 15, 16, 23, 42 ]');
  });
});
