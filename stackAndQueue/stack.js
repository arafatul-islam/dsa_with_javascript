// class Stack {
//   constructor() {
//     this.arr = [];
//   }
//   addElem(val) {
//     this.arr.push(val);
//     return this.arr;
//   }
//   lookup() {
//     return this.arr[this.arr.length - 1];
//   }
//   delLastElem() {
//     this.arr.pop();
//     return this.arr;
//   }
// }

// const stack = new Stack();
// console.log(stack.addElem(1));
// console.log(stack.addElem(2));
// console.log(stack.addElem(3));
// console.log(stack.addElem(4));
// console.log(stack.addElem(5));
// console.log(stack.lookup());
// console.log(stack.delLastElem());
// console.log(stack.lookup());

// stack object implementation
class StackObj {
  constructor() {
    this.obj = {};
    this.count = 0;
  }
  addElem(val) {
    this.obj[this.count++] = val;
    return this.obj;
  }

  delElem() {
    delete this.obj[this.count - 1];
    --this.count;
    return this.obj;
  }

  lookup() {
    return this.obj[this.count - 1];
  }
}

const stackObj = new StackObj();
console.log(stackObj.addElem(1));
console.log(stackObj.addElem(2));
console.log(stackObj.addElem(3));
console.log(stackObj.addElem(4));
console.log(stackObj.lookup());
console.log(stackObj.delElem());
console.log(stackObj.lookup());
console.log(stackObj.delElem());
console.log(stackObj.lookup());
