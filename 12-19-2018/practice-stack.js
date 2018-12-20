'use strict';

let Stack = require('../stack.js');

let stackOne = new Stack();

stackOne.push(1);
stackOne.push(2);
stackOne.push(3);
stackOne.push(4);
stackOne.push(5);

console.log("stackOne", stackOne);

console.log("stackOne.peek", stackOne.peek());

console.log("stackOne.pop", stackOne.pop());
console.log("stackOne.pop", stackOne.pop());
console.log("stackOne.pop", stackOne.pop());
console.log("stackOne.pop", stackOne.pop());
console.log("stackOne.pop", stackOne.pop());

