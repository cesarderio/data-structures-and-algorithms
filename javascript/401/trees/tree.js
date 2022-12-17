'use strict';

class Node {
  constructor(key, value){
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class K_aryNode {
  constructor(value, k){
    this.value = value;
    // this.children = [];
    this.children = new Array(k).fill(null);
  }
}

class Tree{
  constructor(){
    this.root = null;
  }

  preOrder(){
    let results = [];
    const traverse = (node) => {
      // console.log(node.value);
      results.push(node.value);

      if(node.left){
        traverse(node.left);
      }
      if(node.right){
        traverse(node.right);
      }
    };
    traverse(this.root);
    return results;
  }

  inOrder(){
    let results = [];
    const traverse = (node) => {
      if(node.left) traverse(node.left);
      // console.log(node.value);
      results.push(node.value);
      if(node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }


  postOrder(){
    let results = [];
    const traverse = (node) => {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      // console.log(node.value);
      results.push(node.value);
    };
    traverse(this.root);
    return results;

  }

}


class BinarySearchTree extends Tree{
  constructor(key, value){
    super();
    this.key = key;
    this.value = value;
    this.root = null;
  }
  add(key, value){

    if(value < this.value && this.left){
      this.left.add(value);
    }else if(value < this.value){
      this.left = new Node(value);
    }
    if(value > this.value && this.right){
      this.right.add(value);
    }else if(value > this.value){
      this.right = new Node(value);
    }
  }
  contains(key, value){
    if(this.value === value){
      return this;
    }
    if(value < this.value && this.left){
      return this.left.contains(value);
    }else if(value > this.value && this.right){
      return this.right.contains(value);
    }else{
      return null;
    }
  }
}


let tree = new Tree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

console.log(tree);

// tree.preOrder();

// tree.inOrder();

tree.postOrder();

module.exports = { Node, Tree };


// // THIS TRAVERSAL - learn to traverse like with linked lists. make it muscle memory
// preOrder(){

//   // recursive helper function
//   const traverse = (node) => {
//     // base case - Do The Thing
//     console.log(node.value);

//     // left and right recursive cases
//     if(node.left){
//       traverse(node.left);
//     }
//     if(node.right){
//       traverse(node.right);
//     }
//   };
//   // get the recursive party STARTED
//   traverse(this.root);
// }
