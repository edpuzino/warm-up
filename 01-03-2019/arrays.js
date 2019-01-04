'use strict';

let arr = [1,2,3,4,5,6,7,8,9,10];

let forLoop = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

let whileLoop = (arr) => {
  let i=0;
  while (i<10) {
    console.log(arr[i]);
    i++;
  }
}

let map = (arr) => {
  let tripled = arr.map(num => {
    return num * 3;
  });
  console.log(tripled);
}

let filter = (arr) => {
  let sevenPlus = arr.filter( num => {
    return num >= 7;
  });
  console.log(sevenPlus);
}

let reduce = (arr) => {
  const sum = arr.reduce((total, amount) => total + amount);
  console.log(sum);
}

forLoop(arr);
whileLoop(arr);
map(arr);
filter(arr);
reduce(arr);
