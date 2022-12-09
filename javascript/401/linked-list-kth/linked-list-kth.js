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

  kthFromEnd(k){
    let offset = this.head;
    let nBehind = this.head;

    for(let i = 0; i < k; i++){
      offset = offset.next;
      if(!offset){
        console.log('list is not long enough');
      }
      // if logic here to create Exception
    }

    while(offset.next){
      offset = offset.next;
      nBehind = nBehind.next;
    }
    return nBehind.value;
  }

}



let list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

// console.log(JSON.stringify(list.toString()));

// console.log(list.stringify('a'));
// console.log(JSON.stringify(list.toString()));

// console.log('help me');
// list.traverse();
list.toString();


console.log('kthFromEnd!!',list.kthFromEnd(2));
console.log('kthFromEnd!!',list.kthFromEnd(0));
console.log('kthFromEnd!!',list.kthFromEnd(6));




module.exports = LinkedList;












// function kthFromEnd(kth){

// 	if(kth < 0){
// 	return 'doesn't except negative inputs';
// 	}
// 	let current = this.head;
// 	let len = 0;
// 	while(current){
// 		current = current.next;
// 		len++;
// 	};
// let target = len -1 -kth;

// if(target < 0){
// 	return 'index does not exist';
// 	}
// let count = 0;
// 	while(current){
// 		if(count === target){
// 		return current.value;
// 			}
// 		}
//    	current = current.next;
// 	count++;
// 	};
// };
