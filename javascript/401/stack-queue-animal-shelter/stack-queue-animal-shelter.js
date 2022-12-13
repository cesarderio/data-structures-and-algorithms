'use strict';

class Node {
  constructor(animal){
    this.animal = animal;
    this.next = null;
  }
}
class AnimalShelter {
  constructor(){
    this.items = [];
    // this.pref = pref;
  }


  enqueue(animal){
    this.items.push(animal);
  }

  dequeue(pref){
    if(pref){
      return pref;
    } else{
      return null;
    }
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

let queueDog = new AnimalShelter();
queueDog.enqueue('dogOne');


module.exports = AnimalShelter;
