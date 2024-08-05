const Logger = require('./logger.js');
const logger = new Logger();

class Shop {
    constructor(name, items) {
        this.name = name;
        this.items = items;
        logger.log(`A new Store ${name} Opened with ${items} Items`);
    }
}

module.exports = Shop;