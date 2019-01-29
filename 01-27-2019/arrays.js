'use strict';

let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let forLoop = (arr) => {
  for (let i=0; i <arr.length; i++) {
    console.log(arr[i]);
  }
}

let whileLoop = (arr) => {
  let i=0;
  while(i < arr.length) {
    console.log(arr[i]);
    i++;
  }
}

let map = (arr) => {
  let tenth = arr.map(num => {
    return num/10;
  });
  console.log(tenth);
}

let filter = (arr) => {
  let underEight = arr.filter(num => {
    return num < 8;
  });
  console.log(underEight);
}

let reduce = (arr) => {
  let sum = arr.reduce((total, amount) => total + amount);
  console.log(sum);
}

forLoop(arr);
whileLoop(arr);
map(arr);
filter(arr);
reduce(arr);
