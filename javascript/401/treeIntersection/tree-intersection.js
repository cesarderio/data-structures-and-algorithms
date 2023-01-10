import HashTable from "../hashTables/hashTable";

import repeatedWord from "../hashmap-repeated-word/hashmap-repeated-word";


function tree_intersection(tree1, tree2) {
 const hashtable = new Hashtable();
  const result = new Set();
  function traverse(node) {
    if (!node) return;
    hashtable.set(node.value, true);
    traverse(node.left);
    traverse(node.right);
  }

  traverse(tree1.root);

  function checkIntersection(node) {
    if (!node) return;
    if (hashtable.has(node.value)) {
      result.add(node.value);
    }
    checkIntersection(node.left);
    checkIntersection(node.right);
  }
  checkIntersection(tree2.root);
  return result;
}



const tree1 = new BinaryTree();
tree1.root = new Node(1);
tree1.root.left = new Node(2);
tree1.root.right = new Node(3);
tree1.root.left.left = new Node(8);
tree1.root.left.right = new Node(9);

const tree2 = new BinaryTree();
tree2.root = new Node(6);
tree2.root.left = new Node(7);
tree2.root.right = new Node(8);
tree2.root.left.left = new Node(9);
tree2.root.left.right = new Node(10);


console.log(tree_intersection(tree1, tree2));
