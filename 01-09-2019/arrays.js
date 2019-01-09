'use strict';

let arr = [1,2,3,4,5,6,7,8,9,10];

let forLoop = (arr) => {
  for(let i = 0; i < arr.length; i ++) {
    console.log(arr[i]);
  }
}

let whileLoop = (arr) => {
  let i = 0;
  while( i < arr.length) {
    console.log(arr[i]);
    i ++;
  }
}

let map = (arr) => {
  let half = arr.map( num => {
    return num / 2;
  });
  console.log(half);
}

let filter = (arr) => {
  let sevenOrLess = arr.filter( num => {
    return num <= 7;
  });
  console.log(sevenOrLess);
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
