class Node {
  constructor(val) {
    this.val = val;
    this.rightChild = null;
    this.leftChild = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  addNode(val) {
    if (!this.root) {
      this.root = new Node(val);
      ++this.length;
      return this.root;
    }

    let currentNode = this.root;
    let added = false;

    while (!added && currentNode) {
      if (val == currentNode.val) added = true;
      if (val < currentNode.val) {
        if (currentNode.leftChild == null) {
          currentNode.leftChild = new Node(val);
          ++this.length;
          added = true;
        } else {
          currentNode = currentNode.leftChild;
        }
      }

      if (val > currentNode.val) {
        if (currentNode.rightChild == null) {
          currentNode.rightChild = new Node(val);
          added = true;
          ++this.length;
        } else {
          currentNode = currentNode.rightChild;
        }
      }
    }
  }
}

let bst = new BST();
bst.addNode(12);
bst.addNode(8);

bst.addNode(11);
bst.addNode(10);
bst.addNode(5);
bst.addNode(7);
bst.addNode(4);
bst.addNode(3);
bst.addNode(2);

console.log(bst);
