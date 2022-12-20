'use strict';

const { Node, Tree, BinarySearchTree } = require('./tree-max');

describe('Tree', () => {
  it('created as expected', () => {
    let tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    expect(tree.root.value).toEqual(10);
    expect(tree.root.left.value).toEqual(5);
    expect(tree.root.right.value).toEqual(15);
    expect(tree.root.left.left.value).toEqual(1);
    expect(tree.root.left.right.value).toEqual(8);
    expect(tree.root.right.right.value).toEqual(17);
  });
  it('returns a preOrder traversal array as expected', () => {
    let tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    expect(tree.preOrder()).toEqual([10, 5, 1, 8, 15, 17]);
  });
  it('returns a inOrder traversal array as expected', () => {
    let tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    expect(tree.inOrder()).toEqual([1, 5, 8, 10, 15, 17]);
  });
  it('returns a postOrder traversal array as expected', () => {
    let tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    expect(tree.postOrder()).toEqual([1, 8, 5, 17, 15, 10]);
  });
});

// Find Max Value stored in the tree

// Can successfully instantiate an empty tree

// Can successfully instantiate a tree with a single root node

// For a Binary Search Tree, can successfully add a left child and right child properly to a node

// Can successfully return a collection from a preorder traversal

// Can successfully return a collection from an inorder traversal

// Can successfully return a collection from a postorder traversal

// Returns true/false/boolean for the **contains** methos, given an existing or non-existing node value
