'use strict'

let BinarySearchTree = require('../tree.js');
let values = [50,4,66,23,78,1,47,33,89,12];
let tree = new BinarySearchTree();


values.map(value => tree.add(value));

let preOrder = tree.preOrder();
console.log(preOrder);

