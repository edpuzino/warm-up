'use strict';

let BinarySearchTree = require('../tree.js');

let values = [43, 3, 6, 89, 45, 67, 1, 35, 50];
let tree = new BinarySearchTree();

values.map(value => tree.add(value));

let preOrder = tree.preOrder();
console.log(preOrder);

