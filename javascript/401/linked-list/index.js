'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  insert(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  includes(value){
    let current = this.head;

    while(!current){
      if (current === value){
        return true;
      }
    }
    return false;
  }

  append(value){
    let node = new Node(value);

    if(!this.head){
      this.head = node;
      return;
    }

    let current = this.head;

    while(current.next){
      current = current.next;
    }
    current.next = node;
  }

  toString(){
    let current = this.head;
    let output = '';

    while(current){
      output += `${current.element}${current.next ? ' -> ' : ''}`;
      current = current.next;
    }
    return output;
  }

  traverse(){
    let current = this.head;

    while(current){
      // do the thing
      console.log(current.value);
      current = current.next;
    }
  }

}

let list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');

// console.log(JSON.toString(list));

// console.log(list.stringify('a'));
// console.log(JSON.stringify(list.toString()));

console.log('help me');
// list.traverse();
list.toString();
module.exports = LinkedList;
