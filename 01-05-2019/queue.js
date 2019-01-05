'use strict';

let Queue = require('../queue.js');
let que = new Queue();


que.enqueue(43);
que.enqueue(3);
que.enqueue(86);

console.log(que);
console.log('peek', que.peek());
console.log('dequeue',que.dequeue());


