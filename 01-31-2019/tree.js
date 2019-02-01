'use strict';

let BinarySearchTree = require('../tree.js');
let tree = new BinarySearchTree();
let values = [50,75,24,12,37,63,88,6,18,30,43,55,67,90];

let elm = values.map(value => tree.add(value));

let preOrder = tree.preOrder(elm);
console.log('preOrder', preOrder);

let postOrder = tree.postOrder(elm);
console.log('postOrder', postOrder);

let inOrder = tree.inOrder(elm);
console.log('inOrder', inOrder);

let breadthFirst = tree.breadthFirst(elm);
console.log('breadthFirst', breadthFirst);

let findMaxValue = tree.findMaxValue(elm);
console.log('findMaxValue', findMaxValue);

let search = tree.search(43);
console.log('search', search);

