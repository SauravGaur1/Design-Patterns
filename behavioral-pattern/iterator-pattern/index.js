const InventoryItem = require('./inventaryItem.js');
const Iterator = require('./iterator.js');

require('readline').emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const inventory = new Iterator([
    new InventoryItem("Mango", 80),
    new InventoryItem("Banana", 69),
    new InventoryItem("Guvava", 90),
    new InventoryItem("Apple", 19),
    new InventoryItem("Orange", 59),
    new InventoryItem("KIVI", 39),
    new InventoryItem("PineApple", 79),
    new InventoryItem("DragonFruit", 60),
    new InventoryItem("Strawberry", 99),
]);

process.stdin.on('keypress', (str, key) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    switch (key.name) {
        case "right":
            // process.stdout.write(key.name);
             console.log(inventory.next());
            break;
        case "left":
            // process.stdout.write(key.name);
             console.log(inventory.prev());
            break;
        case "up":
            // process.stdout.write(key.name);
             console.log(inventory.first());
            break;
        case "down":
            // process.stdout.write(key.name);
             console.log(inventory.last());
            break;
        case "c":
            if(key.ctrl) {
                process.exit(0);
            }
    
        default:
            break;
    }
})