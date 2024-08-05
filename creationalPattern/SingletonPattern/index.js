const Shop = require('./shop.js');
const Customer = require('./Customer.js');
const Logger =  require('./logger.js');

const logger = new Logger();

logger.log("Application Started...");


const shop = new Shop("Nyi Dukann", [
    {
        name: "some Item",
        price: 23
    },
    {
        name: "some Item 2",
        price: 34
    },
    {
        name: "some Item 3",
        price: 45
    }
]);

const customer = new Customer("Saurav Gaur", 999);

//do something

//do something more 

logger.log("application ended");

console.log(logger.count());
