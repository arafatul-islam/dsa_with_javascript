class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    ++this.length;
  }

  pop() {
    let popedNode = this.tail;
    if (!this.head) {
      return null;
    } else if (this.length === 1) {
      this.tail = null;
      this.head = null;
      popedNode.next = null;
      popedNode.prev = null;
    } else {
      this.tail = popedNode.prev;
      this.tail.next = null;
      --this.length;
      popedNode.prev = null;
    }
    return popedNode;
  }

  shift() {
    if (!this.head) {
      return null;
    } else {
      let currentHead = this.head;
      this.head = currentHead.next;
      this.head.prev = null;
      --this.length;
    }
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      ++this.length;
    } else {
      let currentHead = this.head;
      this.head = newNode;
      this.head.next = currentHead;
      +this.length;
    }
  }

  showList() {
    let currentHead = this.head;
    let arr = [];

    while (currentHead) {
      arr.push(currentHead.val);
      currentHead = currentHead.next;
    }
    return arr;
  }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(1);
doublyLinkedList.push(2);
// doublyLinkedList.push(3);
// doublyLinkedList.push(4);
// doublyLinkedList.shift();
// doublyLinkedList.shift();
// doublyLinkedList.unshift(11);
// doublyLinkedList.push(40);
console.log(doublyLinkedList.pop());

// doublyLinkedList.push(4);
// doublyLinkedList.pop();

// console.log(doublyLinkedList.showList());
// console.log(doublyLinkedList);
