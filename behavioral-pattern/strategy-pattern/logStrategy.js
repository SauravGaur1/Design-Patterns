const { appendFile } = require('fs');
const path = require('path');
class LogStrategy {

    static noDate(timeStamp, message) {
        console.log(message);
    }

    static toFile(timeStamp, message) {
        const filename = path.join(__dirname,'logs.txt');
        appendFile(filename, `${timeStamp} - ${message} \n`, error => {
            if(error){
                console.log('Error Writing to file' + error.message);   
            }
        })
    }

    static toConsole(timeStamp, message) {
        console.log(`${timeStamp} - ${message}`);
    }

    static none() {

    }

}

module.exports = LogStrategy;