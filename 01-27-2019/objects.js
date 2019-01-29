const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {people, stuff};

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {...stuff, cars:[...stuff.csars, 'Nova']};
let newState = {people:['Odie',...people,'Garfield'], stuff:{...stuff, cars:[...stuff.cars,'Nova']}};

console.log({people});
console.log({stuff});
console.log({state});
console.log({newPeople});
console.log({newStuff});
console.log({newState});
