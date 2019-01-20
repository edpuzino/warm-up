'use strict';

let array = [1,2,3,4,5,6,7,8,9,10];

let forLoop = (array) => {
  for(let i = 0; i < array.length; i ++) {
    console.log(array[i]);
  }
}

let whileLoop = (array) => {
  let i = 0;
  while( i < array.length) {
    console.log(array[i]);
    i++;
  }
}

let map = (array) => {
  let half = array.map(num => {
    return num / 2;
  });
  console.log(half);
}

let filter = (array) => {
  let threeOrMore = array.filter( num => {
    return num >= 3;
  });
  console.log(threeOrMore);
}

let reduce = (array) => {
  let sum = array.reduce((total, amount) => total + amount);
  console.log(sum);
}

forLoop(array);
whileLoop(array);
map(array);
filter(array);
reduce(array);
