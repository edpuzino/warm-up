'use strict';

let Queue = require('../queue.js');
let queue = new Queue();

queue.enqueue(43);
queue.enqueue(9);
queue.enqueue(76);

console.log('queue', queue);
console.log('peek', queue.peek());
console.log('dequeue', queue.dequeue());
