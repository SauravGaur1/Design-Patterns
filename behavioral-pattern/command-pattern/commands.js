const path = require('path');
const { writeFile, unlink } = require('fs');

class ExitCommand {
    
    get name() {
        return 'exiting...bye';
    }

    execute() {
        process.exit(0);
    }

}

class CreateCommand {

    constructor(fileName, contents) {
        this.fileName = fileName;
        this.contents = contents;
        this.fullPath = path.join(__dirname, fileName);
    }

    get name() {
        return `Create ${this.fileName}`;
    }

    execute() {
        writeFile(this.fullPath, this.contents, f => f);
    }

    undo() {
        unlink(this.fullPath, f => f);
    }

}

class ClearCommand {
    
    get name() {
        return 'Clearing...You will never see this';
    }

    execute() {
        console.clear();
    }

    undo () {
        
    }

}

module.exports = { 
    ExitCommand,
    CreateCommand,
    ClearCommand,
}