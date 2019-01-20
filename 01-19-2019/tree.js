'use strict';

let BinarySearchTree = require('../tree.js');
let tree = new BinarySearchTree();
let values = [23,1,45,13,56,8,33,18, 43];

values.map(value => tree.add(value));

let preOrder = tree.preOrder();
console.log('preOrder', preOrder);

let postOrder = tree.postOrder();
console.log('postOrder', postOrder);

let inOrder = tree.inOrder();
console.log('inOrder', inOrder);

let breadthFirst = tree.breadthFirst();
console.log('breadthFirst', breadthFirst);

let findMaxValue = tree.findMaxValue();
console.log('findMaxValue', findMaxValue);

let search = tree.search(56);
console.log('search', search);