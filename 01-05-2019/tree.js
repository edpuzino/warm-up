'use strict';

let BinarySearchTree = require('../tree.js');
let values = [23, 1, 56, 8, 73, 28, 43];
let tree = new BinarySearchTree();

values.map(value => tree.add(value));

let preOrder = tree.preOrder();
console.log(preOrder);