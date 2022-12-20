'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class KaryNode {
  constructor(value, k){
    this.value = value;
    // this.children = [];
    this.children = new Array(k).fill(null);
  }
}

class KaryTree{
  constructor(){
    this.root = null;
  }
}

// class BinaryTree
class Tree{
  constructor(){
    this.root = null;

  }

  // THIS TRAVERSAL - learn to traverse like with linked lists. make it muscle memory
  preOrder(){

    // recursive helper function
    const traverse = (node) => {
      // base case - Do The Thing
      console.log(node.value);

      // left and right recursive cases
      if(node.left){
        traverse(node.left);
      }
      if(node.right){
        traverse(node.right);
      }
    };
    // get the recursive party STARTED
    traverse(this.root);

  }

  inOrder(){
    const traverse = (node) => {
      if(node.left) traverse(node.left);
      console.log(node.value);
      if(node.right) traverse(node.right);
    };
    traverse(this.root);
  }


  postOrder(){
    const traverse = (node) => {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      console.log(node.value);
    };
    traverse(this.root);
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



// tree
// tree.preOrder();

tree.inOrder();

tree.postOrder();




module.exports = { Node, Tree };
