'use strict';

let Queue = require('../queue.js');
let queue = new Queue();

queue.enqueue(23);
queue.enqueue(89);
queue.enqueue(45);
queue.enqueue(9);
queue.enqueue(31);

console.log(queue);
console.log('queue.peek', queue.peek());
console.log('queue.dequeue', queue.dequeue());