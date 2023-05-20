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
    let newNode = {
      val,
      nextPointer: null,
    };

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
}

let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.addNode(1);
singlyLinkedList.addNode(2);
singlyLinkedList.addNode(3);
singlyLinkedList.addNode(4);
console.log(singlyLinkedList);
console.log(singlyLinkedList.deleteLastNode());
console.log(singlyLinkedList);
console.log(singlyLinkedList.deleteLastNode());
console.log(singlyLinkedList);
console.log(singlyLinkedList.deleteLastNode());
console.log(singlyLinkedList);
console.log(singlyLinkedList.deleteLastNode());
console.log(singlyLinkedList);
