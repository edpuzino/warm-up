'use strict'

const Queue = require('../queue.js');

let que = new Queue();

que.enqueue(6);
que.enqueue(7);
que.enqueue(8);
que.enqueue(9);
que.enqueue(10);

console.log(que);

console.log('que.peek', que.peek());

console.log('que.dequeue', que.dequeue());
console.log('que.dequeue', que.dequeue());
console.log('que.dequeue', que.dequeue());
console.log('que.dequeue', que.dequeue());
console.log('que.dequeue', que.dequeue());
