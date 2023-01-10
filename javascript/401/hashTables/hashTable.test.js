'use strict';

const HashTable = require('./hashTable');

describe('Hash Table', () => {
  it('Setting a key/value to your hashtable results in the value being in the data structure', () => {

    expect().toEqual();

  });

  it('Retrieving based on a key returns the value stored', () => {

    expect().toEqual();
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    const hashTable = new HashTable(10);
    expect(hashTable.get('key')).toBe(null);
  });

  it('Successfully returns a list of all unique keys that exist in the hashtable', () => {

    expect().toEqual();
  });

  it('Successfully handle a collision within the hashtable', () => {

    expect().toEqual();
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {

    expect().toEqual();
  });

  it('Successfully hash a key to an in-range value', () => {
    const hashTable = new HashTable(10);
    expect(hashTable.hash('key')).toBeLessThan(10);
  });

});

