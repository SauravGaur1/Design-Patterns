const userFactory = require('./userFactory.js');

const aadam = userFactory("saurav", [900, 455,544]);
const eve = userFactory("SomeOne :) ", [32, 32, 23], 'employee');

console.log(typeof aadam, aadam);
console.log(typeof eve, eve);