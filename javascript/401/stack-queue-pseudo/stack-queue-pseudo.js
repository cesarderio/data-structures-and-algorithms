'use strict';


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
  }

  isEmpty(){
    if(this.items.length === 0){
      return null;
    }
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

class pseudoQueue {
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
stackOne.push(1);
stackOne.push(2);
stackOne.push(3);

console.log(stackOne.top.value);



class pseudQueue {
  constructor() {
    this.items = [];
    this.pushStack = [];
    this.popStack = [];
  }
  push(value){
    this.pushStack.push(value);
  }

  pop(){
    if(this.popStack.length){
      while(this.pushStack.length){
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack.pop();
  }
  peek(){
    if(!this.popStack.length){
      while(this.pushStack.length){
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack[this.popStack.length - 1];
  }

  empty(){
    return !this.pushStack.length && !this.popStack.length;
  }

}
