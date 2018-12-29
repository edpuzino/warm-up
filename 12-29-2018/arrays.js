'use strict';

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];

let forLoop = (arr) => {
  for(let i = 0; i<arr.length; i ++) {
    console.log(arr[i]);
  }
}

let whileLoop = (arr) => {
  let i=0;
  while(i < 10) {
    console.log(arr[i]);
    i++;
  }
}

let maps = (arr) => {
  let doubled = arr.map( num => {
    return num * 2;
  });
  console.log(doubled);
}

let filter = (arr) => {
  let threeOrLess = arr.filter( num => {
    return num <= 3;
  });
  console.log(threeOrLess);
}

let reduce = (arr) => {
  const sum = arr.reduce((total, amount) => total + amount);
  console.log(sum);
}

forLoop(arr);
whileLoop(arr);
maps(arr);
filter(arr);
reduce(arr);

