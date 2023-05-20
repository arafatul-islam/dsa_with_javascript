// class Queuee {
//   constructor() {
//     this.arr = [];
//   }
//   addElem(val) {
//     this.arr.push(val);
//     return this.arr;
//   }
//   lookup() {
//     return this.arr[0];
//   }
//   deleteElem() {
//     this.arr.shift();
//     return this.arr;
//   }
// }

// const queue = new Queuee();
// console.log(queue.addElem(1));
// console.log(queue.addElem(2));
// console.log(queue.addElem(3));
// console.log(queue.addElem(4));
// console.log(queue.addElem(5));
// console.log(queue.lookup());
// console.log(queue.deleteElem());
// console.log(queue.lookup());

// queue object implementation

class QueueObj {
  constructor() {
    this.obj = {};
    this.count = 0;
  }

  addElem(val) {
    this.obj[this.count++] = val;
    return this.obj;
  }

  deleteElem() {
    for (let i = 0; i < this.count; i++) {
      this.obj[i] = this.obj[i + 1];
    }
    this.count--;
    delete this.obj[this.count];
    return this.obj;
}  }


const queueObj = new QueueObj();
console.log(queueObj.addElem(1));
console.log(queueObj.addElem(2));
console.log(queueObj.addElem(3));
console.log(queueObj.addElem(4));
console.log(queueObj.addElem(5));
console.log(queueObj.deleteElem());
console.log(queueObj.deleteElem());
console.log(queueObj.deleteElem());
