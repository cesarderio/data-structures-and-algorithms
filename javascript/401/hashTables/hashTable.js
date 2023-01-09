'use strict';

const { LinkedList } = require('../linked-list/index');

class HashTable{
  constructor(size){
    this.size = size;
    this.buckets = new Array(size);
  }
  hash(key){
    let characters = key.split('');
    // use the reducer pattern
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);
    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value){
    let position = this.hash(key);
    // square bracket notation allow me to create an object property dynamically from a variable
    let data = {[key]: value};

    // I am choosing to show how to store in a linked list - your implementation will be different
    // using a linked list: does the bucket exist? If it does; add to existing bucket.
    // If it does not exist, create bucket and add key/value to bucket
    if(this.buckets[position]){
      let bucket = this.buckets[position];
      bucket.add(data);
    } else{
      let bucket = new LinkedList();
      bucket.add(data);
      this.buckets[position] = bucket;
    }
  }

  get(key){
    let position = this.hash(key);

    // your implementation will be different
    // This demo needs to interact with the linked list

    if(this.buckets[position]){
      let bucket = this.buckets[position];
      let value = bucket.head.value[key];
      // let value = bucket.value[key];
      return value;
    }

  }

  has(key){
    let position = this.hash(key);

    if(this.buckets[position]){
      return true;
    }

  }

  key(){
    // Object.keys(this.buckets)
    return Object.keys(this.buckets);
  }



}


let table = new HashTable(1024);

console.log(table);

console.log('Ryan', table.hash('Ryan'));

console.log('Raphael', table.hash('Raphael'));

console.log('Kenny', table.hash('Kenny'));

table.set('Raphael', 38);

console.log(table);

table.set('Kenny', 'red');

console.log(table.get('Kenny'));
