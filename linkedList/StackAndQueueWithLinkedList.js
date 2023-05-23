class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class BookStack {
  constructor() {
    this.length = 0;
    this.top = null;
    this.bottom = null;
  }

  push(val) {
    let newBook = new Node(val);

    if (!this.top) {
      this.top = newBook;
      this.bottom = newBook;
    } else {
      let oldTop = this.top;
      newBook.next = oldTop;
      this.top = newBook;
    }
    ++this.length;
    return this.top;
  }

  shift() {
    let currentTop = this.top;
    if (!this.top) return null;
    else if (this.top == this.bottom) {
      this.bottom = null;
      this.top = null;
      --this.length;
    } else {
      this.top = currentTop.next;
      currentTop.next = null;
      --this.length;
    }
    return currentTop;
  }
}

// let allBookStack = new BookStack();
// allBookStack.push("book-1");
// allBookStack.push("book-2");
// allBookStack.push("book-3");
// console.log(allBookStack.shift());
// console.log(allBookStack.shift());
// console.log(allBookStack.shift());
// // console.log(allBookStack.shift());
// console.log(allBookStack);

class CarQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enquee(val) {
    let newCar = new Node(val);
    if (!this.first) {
      this.first = newCar;
      this.last = newCar;
    } else {
      this.last.next = newCar;
      this.last = newCar;
    }
    this.length++;
    return this.last;
  }

  dequeue() {
    let oldFirst = this.first;
    if (!this.first) {
      return null;
    } else if (this.first == this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = oldFirst.next;
      oldFirst.next = null;
    }
    --this.length;

    return oldFirst;
  }
}

let carQueue = new CarQueue();
console.log(carQueue.enquee("car-1"));
console.log(carQueue.enquee("car-2"));
// console.log(carQueue.push("car-3"));
// console.log(carQueue.pop());
// console.log(carQueue.pop());
console.log(carQueue.dequeue());
