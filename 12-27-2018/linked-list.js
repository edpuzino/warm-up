'use strict'; 

let LinkedList = require('../ll.js');
let ll = new LinkedList();

ll.append(34);
console.log(ll);
ll.append(89);
console.log(ll);
ll.append(23);
console.log(ll);
ll.append(43);
console.log(ll);
ll.append(1);
console.log(ll);

ll.prepend(2);
console.log(ll);
ll.prepend(48);
console.log(ll);

