'use strict';

let BinarySearchTree = require('../tree.js');
let tree = new BinarySearchTree();
let values = [50,25,75,12,37,62,87,1,100];

let pine = values.map(value => tree.add(value));

let preOrder = tree.preOrder(pine);
console.log('preOrder', preOrder);

let postOrder = tree.postOrder(pine);
console.log('postOrder', postOrder);

let inOrder = tree.inOrder(pine);
console.log('inOrder', inOrder);

let breadthFirst = tree.breadthFirst(pine);
console.log('breadthFirst', breadthFirst);

let JindMaxValue = tree.findMaximumValue(pine);
console.log('findMaxValue', findMaxValue);

let search = tree.search(37);
console.log('search', search);


