'use strict';

let Stack = require('../stack.js');
let stack = new Stack();

stack.push(87);
stack.push(32);
stack.push(24);


console.log('stack', stack);
console.log('peep', stack.peek());
console.log('stack.pop', stack.pop());
console.log('stack.pop', stack.pop());
console.log('stack.pop', stack.pop());