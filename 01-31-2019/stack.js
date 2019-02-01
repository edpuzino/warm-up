'use strict';

let Stack = require('../stack.js');
let stack = new Stack;

stack.push(9);
stack.push(89);
stack.push(34);

console.log(stack);
console.log('peek', stack.peek());
console.log('pop', stack.pop());
console.log('pop', stack.pop());
