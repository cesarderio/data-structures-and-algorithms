

class AnimalShelter {
  constructor(){
    this.items = [ ];
  }

  Node(animal) {
    this.animal = animal;
    this.next = null;
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
}





