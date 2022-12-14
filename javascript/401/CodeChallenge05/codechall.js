'use strict';

// value / data
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

  // add a node to the end of the linked list
  // append = add = append
  add(value){
    let node = new Node(value);

    // if no head exists, we assign new node as head and we are done
    if(!this.head){
      this.head = node;
      return;
    }

    // traverse the linked list and add the new node to the end
    let current = this.head;

    while(current.next){
      current = current.next;
    }
    current.next = node;
  }

  // traverse a linked list and log the value of each node
  traverse(){
    let current = this.head;

    while(current){
      // do the calc/include/evaluation
      console.log(current.value);
      current = current.next;
    }
  }

  // insert to beginning of list
  insert(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;

  }
}



let list = new LinkedList();
list.add('a');
list.add('b');
list.add('c');
list.add('d');
list.add('e');


console.log(JSon.stringify(list));
list.traverse();

module.exports = LinkedList;
