'use strict';

let Queue = require('../queue.js');
let queue = new Queue();

queue.enqueue(38);
queue.enqueue(8);
queue.enqueue(23);

console.log(queue);
console.log('queue.peek', queue.peek());
console.log('dequeue', queue.dequeue());
