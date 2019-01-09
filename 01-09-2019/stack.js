'use strict';

let Stack = require('../stack.js');
let stack = new Stack();

stack.push(9);
stack.push(43);
stack.push(8);

console.log('stack', stack);
console.log('peek', stack.peek());
console.log('pop', stack.pop());
console.log('pop', stack.pop());

