class Logger { 

    constructor() {
        this.logs = [];
    }

    count() {
        return this.logs.length;
    }

    log(message) {
        let timeStamp = Date.now();
        const str = `Time-Stamp${timeStamp} : ${message}`;
        this.logs.push(str);
        console.log(str);
    }

}

// Normal
// module.exports = Logger; 

// SingleTon Solution 1 
// but need to change the exports as to use them as instance not modules
// module.exports = new Logger();

// SingleTon Solution 2 

class Singleton { 
    constructor () {
        if(!Singleton.instance) { 
            Singleton.instance = new Logger();
        }
        return Singleton.instance;
    }
}

module.exports = Singleton;