'use strict';

let Stack = require('../stack.js');
let stack = new Stack();

stack.push(32);
stack.push(98);
stack.push(56);

console.log(stack);
console.log('stack.peek', stack.peek());
console.log('stack.pop', stack.pop());
console.log('stack.pop', stack.pop());
