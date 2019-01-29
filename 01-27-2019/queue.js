'use strict';

let Queue = require('../queue.js');
let queue = new Queue();

queue.enqueue(23);
queue.enqueue(33);
queue.enqueue(43);

console.log('queue', queue);
console.log('peek', queue.peek());
console.log('dequeue', queue.dequeue());
