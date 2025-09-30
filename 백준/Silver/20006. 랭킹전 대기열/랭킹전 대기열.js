const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let [p, m] = input[0].split(' ').map(Number);

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

const playerQueue = new Queue();

for (let i = 1; i <= p; i++) {
  const [level, name] = input[i].split(' ');
  const player = { level: Number(level), name };
  playerQueue.enqueue(player);
}

let rooms = [];
let standard = 0;
while (playerQueue.size() !== 0) {
  const player = playerQueue.dequeue();

  for (let i = 0; ; i++) {
    if (!rooms[i]) {
      rooms.push([]);
    }
    if (rooms[i].length === 0) {
      standard = player.level;
    } else {
      standard = rooms[i][0].level;
    }
    if (rooms[i].length < m && player.level <= standard + 10 && player.level >= standard - 10) {
      rooms[i].push(player);
      break;
    }
  }
}

rooms.forEach((room) => {
  room.length === m ? console.log('Started!') : console.log('Waiting!');
  room.sort((a, b) => a.name.localeCompare(b.name));
  for (const player of room) {
    console.log(`${player.level} ${player.name}`);
  }
});
