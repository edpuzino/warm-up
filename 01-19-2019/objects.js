const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {people,stuff};

let newPeople = ['Odie', ...people,'Garfield'];

let newStuff = { ...stuff, cars:[...stuff.cars, 'Porshe']};
let newState = {people:['Odie', ...people,'Garfield'], stuff:{...stuff, cars:[...stuff.cars, 'Porshe']}};

console.log({people});
console.log({stuff});
console.log({state});
console.log({newPeople});
console.log({newStuff});
console.log({newState});
