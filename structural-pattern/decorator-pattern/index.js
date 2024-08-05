const { InventoryItem, GoldenInventoryItem, DiamondInventoryItem } = require('./inventryItem.js');
const Shopper = require('./shopper.js');

const saurav = new Shopper('Saurav', 10000);

const walkman = new InventoryItem("Walkman", 29.99);
const neclace = new InventoryItem("Neclace", 99.99);

const gold_naclace = new GoldenInventoryItem(neclace);
const diamont_walkman = new DiamondInventoryItem(walkman);
const diamond_gold_naclace = new DiamondInventoryItem(gold_naclace);

saurav.purchase(walkman);
saurav.purchase(neclace);
saurav.purchase(diamond_gold_naclace);
saurav.purchase(diamont_walkman);



saurav.printStatus();
