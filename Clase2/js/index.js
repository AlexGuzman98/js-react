import { multi, sum }  from './app.js';

const importedValue = multi(4, 4, 4, 4);
const importedValue2 = sum(2, 2, 2, 2);

console.log("this is a imported value ", importedValue);
console.log("this is a imported value ", importedValue2);
