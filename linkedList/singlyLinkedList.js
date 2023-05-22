class NewNode {
  constructor(val, nextPointer = null) {
    this.val = val;
    this.nextPointer = nextPointer;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  isEmply() {
    return this.length === 0;
  }
  addNode(val) {
    let newNode = new NewNode(val);

    if (this.isEmply()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextPointer = newNode;
      // console.log(this.tail.nextPointer);
      this.tail = newNode;
    }
    this.length++;
  }

  addNodeAtFirst(val) {
    let newNode = new NewNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      ++this.length;
    } else {
      newNode.nextPointer = this.head;
      this.head = newNode;
      ++this.length;
    }
  }
  deleteLastNode() {
    if (!this.head) return null;

    if (this.length == 1) {
      let removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removedNode;
    }

    let currentNode = this.head;
    let lastNode = this.tail;
    let newLastNode;

    while (currentNode) {
      if (currentNode.nextPointer == lastNode) {
        newLastNode = currentNode;
      }
      currentNode = currentNode.nextPointer;
    }

    newLastNode.nextPointer = null;
    this.tail = newLastNode;
    --this.length;

    return lastNode;
  }

  deleteFirstNode() {
    if (!this.head) return null;
    if (this.length === 1) {
      let removedNode = this.head;
      this.head = null;
      this.tail = null;
      return removedNode;
    }

    let currentNode = this.head;
    this.head = currentNode.nextPointer;
    currentNode.nextPointer = null;
    return currentNode;
  }

  showList() {
    let arr = [];
    let currentHead = this.head;

    while (currentHead) {
      arr.push(currentHead.val);
      currentHead = currentHead.nextPointer;
    }
    return arr;
  }
}

let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.addNodeAtFirst(1);
singlyLinkedList.addNodeAtFirst(21);
singlyLinkedList.addNodeAtFirst(111);
singlyLinkedList.addNode(500);

// singlyLinkedList.addNode(2);
// singlyLinkedList.addNode(3);
// singlyLinkedList.addNode(4);
console.log(singlyLinkedList.showList());
// console.log(singlyLinkedList.addNodeAtFirst(0));
// console.log(singlyLinkedList);

// console.log(singlyLinkedList.deleteFirstNode());
// console.log(singlyLinkedList);
// console.log(singlyLinkedList.deleteLastNode());
// console.log(singlyLinkedList);
// console.log(singlyLinkedList.deleteLastNode());
// console.log(singlyLinkedList);
// console.log(singlyLinkedList.deleteLastNode());
// console.log(singlyLinkedList);
// console.log(singlyLinkedList.deleteLastNode());
// console.log(singlyLinkedList);
