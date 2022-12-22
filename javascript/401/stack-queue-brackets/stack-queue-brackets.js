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

      if (value === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        current = this.head;
        let it = 0;

        while (it < value) {
          it++;
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      this.size++;
    }
  }

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
    this.items = [];
    this.count = 0;
  }

  push(value){
    this.items.push(value);
  }

  pop(){
    if(this.items.length === 0){
      return null;
    }
    return this.items.pop();
  }

  peek(){
    return this.items[this.items.length - 1];
    // return this.top.value;
  }

  isEmpty(){
    if(this.items.length === 0){
      return null;
    }
  }

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

  validate(){
    function validateBrackets(string) {
      const stack = [];
      const regex = /[[({]/;
      const regexChar = /[A-z]/;
      const filter = [];
      let newString;
      for (let i of string) {
        if(!regexChar.test(i)){
          filter.push(i);
        }
      }
      newString = filter.join('');
      for (let i of newString) {
        if (regex.test(i)) {
          stack.push(i);
        } else if (!checker(stack.pop(), i)) {
          return false;
        }
      }
      return stack.length === 0;
    }
    function checker(string1, string2) {
      const combined = string1 + string2;
      return combined === '()' || combined === '[]' || combined === '{}';
    }
  }
}


// function validateBrackets(string) {
//   const stack = [];
//   const regex = /[[({]/;
//   const regexChar = /[A-z]/;
//   const filter = [];
//   let newString;
//   for (let i of string) {
//     if(!regexChar.test(i)){
//       filter.push(i);
//     }
//   }
//   newString = filter.join('');
//   for (let i of newString) {
//     if (regex.test(i)) {
//       stack.push(i);
//     } else if (!checker(stack.pop(), i)) {
//       return false;
//     }
//   }
//   return stack.length === 0;
// }
// function checker(string1, string2) {
//   const combined = string1 + string2;
//   return combined === '()' || combined === '[]' || combined === '{}';
}


module.exports = { LinkedList, Node, Queue };


console.log(validateBrackets('()'));
console.log(validateBrackets('{code{{]'));
console.log(validateBrackets('()'));


// validateBrackets('[{()Code}Fellows}');

// validateBrackets('()');


module.exports = validateBrackets();
