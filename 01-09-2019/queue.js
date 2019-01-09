'use strict';

let Queue = require('../queue.js');
let que = new Queue();

que.enqueue(34);
que.enqueue(143);
que.enqueue(3);

console.log(que);
console.log('peek', que.peek());
console.log('dequeue', que.dequeue());
