'use strict';

let BinarySearchTree = require('../tree.js');
let tree = new BinarySearchTree;
let values = [50,23,75,12,89,32,67,1,98,];

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

let search = tree.search(89);
console.log('search', search);
