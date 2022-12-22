treesMatch = (treeOne, treeTwo) => {
   let treeOne ;
   let treeTwo ;

   function inOrder(){
    const traverse = (node) => {
    if(node.left) traverse(node.left);
    console.log(node.value);
    if(node.right) traverse(node.right);
   }
   traverse(this.root);

   treeOne.inOrderr() === treeTwo.inOrder() ? true : false;
  }
}
