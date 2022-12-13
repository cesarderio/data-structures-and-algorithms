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
    this.size = 0;
  }

  // printList(n) {
  //   while (n != null) {
  //     document.write(n.data + ' ');
  //     n = n.next;
  //   }
  // }
  insert(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  insertBefore(value, newValue){

    if (value < 0 || value > this.size){
      return console.log('Please enter a valid index.');
    } else {
      let node = new Node(newValue);
      let current, previous;
      current = this.head;

      // add the element to the
      // first index
      if (value === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        current = this.head;
        let it = 0;

        // iterate over the list to find
        // the position to insert
        while (it < value) {
          it++;
          previous = current;
          current = current.next;
        }
        // adding an element
        node.next = current;
        previous.next = node;
      }
      this.size++;
    }
  }


  // addBefore(newNode, originalNode){

  //   if (this.head === originalNode) {
  //     // Create a new node
  //     var n = new Node(newNode);
  //     n.next = originalNode;
  //     this.head = n;
  //     return n;
  //   } else {
  //     let f = null;
  //     for (n = this.head; n !== originalNode; f = n, n = n.next);

  //     let m = new Node(newNode);
  //     m.next = f.next;
  //     f.next = m;
  //     return m;
  //   }
  // }

  insertAfter(value, newValue){

    if (value === null)
    {
      document.write('The given node cannot be null');
      return;
    }
    let new_node = new Node(newValue);
    // Make next of new Node as next of previous node
    new_node.next = value.next;
    value.next = new_node;
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
      output += `{${current.value}}${current.next ? ' -> ' : ''}`;
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

class Stack {

  constructor(){
    // this.top = null;
    this.items = [];
    this.count = 0;
  }

  push(value){
    this.items.push(value);
    // this.size++
    // this.items[this.count] = value;
    // const node = new Node(value);
    // node.next = this.top;
    // this.top = node;
  }

  pop(){
    if(this.items.length === 0){
      return null;
    }
    return this.items.pop();
    // if(this.top === 0) return undefined;
    // const tempNode = this.top;
    // this.top = top.next;
    // this.top.next = null;
    // return tempNode.value;
  }

  peek(){
    return this.items[this.items.length - 1];
    // return this.top.value;
  }

  isEmpty(){
    if(this.items.length === 0){
      return null;
    }
    // if empty return null
    // if(this.top === 0) return undefined;
    // console.log(this.count === 0 ? 'Stack is empty'
    //   : 'Stack is NOT empty');
    // return this.count === 0;
  }

  // Check size of stack
  size(){
    console.log(`${this.count} elements in stack`);
  }

  print(){
    for(let i = this.items.length - 1; i >=0; i--){
      console.log(this.items[i]);
    }
  }

}

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item){
    this.items.push(item);
  }

  dequeue(){
    return this.items.shift();
  }

  peek(){
    return this.items[0];
  }

  getSize(){
    return this.items.length;
  }

  isEmpty(){
    return this.getSize() === 0;
  }
}




let stackOne = new Stack();
stackOne.push('apple');
stackOne.push('apple');
stackOne.push(1);
stackOne.push(2);
stackOne.push(3);



console.log(stackOne.top.value);




let list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');

console.log(JSON.stringify(list.toString()));

// console.log(list.stringify('a'));
// console.log(JSON.stringify(list.toString()));

// console.log('help me');
// list.traverse();
list.toString();
module.exports = LinkedList;
