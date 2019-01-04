'use strict';

let Queue = require('../queue.js');
let queue = new Queue();

queue.enqueue(89);
queue.enqueue(43);
queue.enqueue(34);

console.log(queue);
console.log('queue.peek', queue.peek());
console.log('dequeue', queue.dequeue());
