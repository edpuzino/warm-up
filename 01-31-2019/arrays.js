'use strict';

let array = [1,2,3,4,5,6,7,8,9,10];

let forLoop = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

let whileLoop = (array) => {
  let i = 0;
  while(i < array.length) {
    console.log(array[i]);
    i ++;
  }
}

let map = (array) => {
  let timesThree = array.map(num => {
    return num * 3;
  });
  console.log(timesThree);
}

let filter = (array) => {
  let twoToSeven = array.filter( num => {
    return num >=2 && num <= 7;
  });
  console.log(twoToSeven);
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


