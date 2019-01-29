'use strict';

let Stack = require('../stack.ja');
let stack = new Stack();

stack.push(2);
stack.push(90);
stack.push(45);

console.log(stack);
console.log('peek', stack.peek());
console.log('pop', stack.pop());
console.log('pop', stack.pop());
