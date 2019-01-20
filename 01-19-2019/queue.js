'use strict';

let Queue = require('../queue.js');
let queue = new Queue();

queue.enqueue(76);
queue.enqueue(65);
queue.enqueue(54);

console.log('queue', queue);
console.log('peek', queue.peek());
console.log('dequeue', queue.dequeue());

