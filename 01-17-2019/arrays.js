'use strict';

let arr = [1,2,3,4,5,6,7,8,9,10];

let forLoop = (arr) => {
  for(let i = 0;  i < arr.length; i ++) {
    console.log(arr[i]);
  }
}

let whileLoop = (arr) => {
  let i = 0;
  while( i< arr.length) {
    console.log(arr[i]);
    i++;
  }
}

let map = (arr) => {
  let double = arr.map( num => {
    return num * 2;
  });
  console.log(double);
}

let filter = (arr) => {
  let twoToSeven = arr.filter( num => {
    return num >=2 && num <= 7;
  });
  console.log(twoToSeven);
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

