'use strict';

let Queue = require('../queue.js');
let que = new Queue;

que.enqueue(32);
que.enqueue(78);
que.enqueue(7);

console.log('que', que);
console.log('peek', que.peek());
console.log('dequeue', que.dequeue());
