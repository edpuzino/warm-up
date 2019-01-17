'use strict';

let Stack = require('../stack.js');
let stack = new Stack();

stack.push(4);
stack.push(34);
stack.push(32);

console.log(stack);
console.log('stack.peek',stack.peek());
console.log('stack.pop', stack.pop());
console.log('stack.pop', stack.pop());