'use strict';

let Stack = require('../stack.js');

let stack = new Stack();

stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
stack.push(10);

console.log('stack', stack);

console.log('stack.peek', stack.peek());

console.log('stack.pop', stack.pop());
console.log('stack.pop', stack.pop());
console.log('stack.pop', stack.pop());
console.log('stack.pop', stack.pop());
console.log('stack.pop', stack.pop());
