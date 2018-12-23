'use strict'

let array = [1,2,3,4,5,6,7,8,9,10];

function forLoop(array) {
  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function whileLoop(array) {
  let i=0;
  while(i<10) {
    console.log(array[i]);
    i++;
  }
}

function maps(array) {
  let doubled = array.map(num => {
    return num * 2;
  });
  console.log(doubled);
}

forLoop(array);
whileLoop(array);
maps(array);