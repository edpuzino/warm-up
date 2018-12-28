'use strict'

let BinarySearchTree = require('../tree.js');

let values = [9, 4, 3, 6, 5, 7, 17, 22, 20];
let tree = new BinarySearchTree();


values.map(value => tree.add(value));

let preOrder = tree.preOrder();
console.log(preOrder);