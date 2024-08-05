const Store = require('./store.js');
const Shopper = require('./shopper.js');
const Mall = require('./mall.js');

const saurav = new Shopper("Saurav");
const SomeOne = new Shopper("SomeOne");
const AnotherBeing = new Shopper("Just Another Human");

const vallyMall = new Mall();

const catsAndThings = new Store("Cats & Things");
const insAndOuts = new Store("Ins & Outs");

catsAndThings.subscribe(saurav);
catsAndThings.subscribe(SomeOne);
catsAndThings.subscribe(vallyMall);

insAndOuts.subscribe(AnotherBeing);
insAndOuts.subscribe(vallyMall);

catsAndThings.sale(20);
insAndOuts.sale(50);

console.log(vallyMall.sales);