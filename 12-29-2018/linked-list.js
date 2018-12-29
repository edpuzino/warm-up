'use strict';

let LinkedList = require('../ll.js');
let ll = new LinkedList();

ll.append(90);
console.log('append', ll);
ll.append(23);
console.log('append', ll);
ll.append(74);
console.log('append', ll);
ll.prepend(34);
console.log('prepend', ll);
ll.prepend(19);
console.log('prepend', ll);
