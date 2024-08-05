const person_prototype = require('./person_prototype.js');

const aadam = person_prototype.clone();
const eve = person_prototype.clone();

aadam.name = "Saurav";
eve.name = "SomeOne 🌚";

console.log (`${aadam.name} : ${aadam._list}`);
console.log (`${eve.name} : ${eve._list}`);