function reverseList(node) {
  let current = node;
  let next = null;
  let previous = null;

  while (current !== null) {
    let next = current.next;
    current.next = previous;
    let previous = current;
    current = next;
  }
  node = previous;
  return node;
}
console.log(reverseList);
