const logger = require('./logger.js');

logger.log("Hello World!");
logger.log("Hi World!");
logger.log("Yo World!");

logger.changeStrategy('toFile');

logger.log("Hello World!");
logger.log("Hi World!");
logger.log("Yo World!");
