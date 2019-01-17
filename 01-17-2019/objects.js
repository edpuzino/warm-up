const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {people, stuff};

let newPeople = ['Odie', ...people,'Garfield'];
const newStuff = { ...stuff, cars:[...stuff.cars,'Getta']};
let newState = {people:['Odie', ...people,'Garfield'], stuff:{...stuff, cars:[...stuff.cars,'Getta']}};



console.log({people});
console.log({stuff});
console.log({stuff});
console.log({newPeople});
console.log({newStuff});
console.log({newState});
