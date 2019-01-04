'use strict';

let Stack = require('../stack.js');
let stack = new Stack();

stack.push(43);
stack.push(31);
stack.push(67);

console.log('stack', stack);
console.log('peep', stack.peek());
console.log('stack.pop', stack.pop());
console.log('stack.pop', stack.pop());
