const Logger = require('./logger.js');
const logger = new Logger();

class Customer {
    constructor(name, money) {
        this.name = name;
        this.money = money;
        logger.log(`A new Customer, ${name} Arrived with ${money} Currency`);
    }
}

module.exports = Customer;