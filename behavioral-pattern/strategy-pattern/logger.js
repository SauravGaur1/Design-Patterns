const LogStrategy = require("./logStrategy");
const config = require('./config.json');

class Logger { 

    constructor(strategy = "toConsole") {
        this.logs = [];
        this.strategy = LogStrategy[strategy];
    }

    count() {
        return this.logs.length;
    }

    log(message) {
        let timeStamp = Date.now();
        const str = `Time-Stamp${timeStamp} : ${message}`;
        this.logs.push(str);
        this.strategy(timeStamp,message);
    }

    changeStrategy(newStrategy) {
        this.strategy = LogStrategy[newStrategy];
    }

}

module.exports = new Logger(config.logs.strategy);
