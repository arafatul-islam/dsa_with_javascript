class DataStructure {
  constructor() {
    this.storage = [];
  }

  insertAtFirst(value) {
    this.storage.unshift(value);
    return this.storage;
  }
}

const ds = new DataStructure();
console.log(ds.insertAtFirst(1));
console.log(ds.insertAtFirst(2));
console.log(ds.insertAtFirst(3));
console.log(ds.insertAtFirst(4));
