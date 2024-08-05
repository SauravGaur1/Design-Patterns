const Shopper = require('./shopper.js');

const person = new Shopper();

person.addItemtToList("Granade");
person.addItemtToList("Bomb");

module.exports = person;