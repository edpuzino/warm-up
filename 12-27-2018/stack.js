'use strict';

let Stack = require('../stack.js');
let stack = new Stack();

stack.push(12);
stack.push(34);
stack.push(43);
stack.push(51);
stack.push(9);

console.log('stack', stack);
console.log('stack.peek', stack.peek());
console.log('stack.pop', stack.pop());
console.log('stack.pop', stack.pop());
console.log('stack.pop', stack.pop());
console.log('stack.pop', stack.pop());
console.log('stack.pop', stack.pop());