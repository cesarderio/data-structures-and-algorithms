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
    this.value === value ? true : false;
  }

  findMax(){
    const traverse = (node) => {
      if(node === null){
        return -Infinity;
      }
      const left = traverse(node.left);
      const right = traverse(node.right);
      return Math.max(node.value, left, right);
    };
    return traverse.this.root;
  }
}

module.exports = { Node, Tree, BinarySearchTree };
