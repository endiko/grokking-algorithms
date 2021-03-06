module.exports = class Queue {
  constructor() {
    this.items = [];
  }

  // add elements to queue
  enqueue(element) {
    this.items.push(element);
  }

  // remove element from queue
  dequeue() {
    return !this.isEmpty() ? this.items.shift() : 'Underflow';
  }
  front() {
    return !this.isEmpty() ? this.items[0] : 'No elements in queue';
  }
  isEmpty() {
    return this.items.length === 0;
  }
  printQueue() {
    let str = '';
    this.items.forEach(item => (str += `${item} `));

    console.log(str);
  }
};
