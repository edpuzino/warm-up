'use strict'

let BinarySearchTree = require('../tree.js');

let values = [50,12,65,3,87,24,90,34,51,49];
let tree = new BinarySearchTree();

values.map(value => tree.add(value));

let preOrder = tree.preOrder();
console.log(preOrder);

