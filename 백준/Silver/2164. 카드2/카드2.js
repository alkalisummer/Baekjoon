const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = input[0];

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  size() {
    return this.tailIndex - this.headIndex;
  }
}

const cardQueue = new Queue();

for (let i = 1; i <= n; i++) {
  cardQueue.enqueue(i);
}

while (cardQueue.size() !== 1) {
  cardQueue.dequeue();
  const head = cardQueue.dequeue();
  cardQueue.enqueue(head);
}

console.log(cardQueue.peek());