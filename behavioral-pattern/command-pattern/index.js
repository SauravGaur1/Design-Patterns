const conductor = require('./conductor.js');
const { ExitCommand, CreateCommand, ClearCommand } = require('./commands.js');
const { stdin, stdout } = require('process');
const {createInterface} = require('readline');
const cli = createInterface({
    input: stdin,
    output: stdout
});

console.log(`Supported commands :  1) create <filename> <contents> |
2) exit
3) clear
4) undo
5) redo
6) history`);

cli.prompt();

cli.on('line', (input) => {

    const [command, ...rest] = input.split(' ');
    const [filename, ...contents] = rest;
    const text = contents.join(' ');

    switch(command) {
        case "exit":
            console.log("TODO: EXIT");
            conductor.run(new ExitCommand());
            break;
        case "create":
            console.log(`TODO: Create File ${filename}`);
            console.log(`file contents: ${text}`);
            conductor.run(new CreateCommand(filename, text));
            break;
        case "clear":
            conductor.run(new ClearCommand());
            break;
        case "history":
            conductor.printHistory();
            break;
        case "undo":
            conductor.undo();
            break;
        case "redo":
            conductor.redo();
            break;
        default: 
            console.log(`Unsupported Command`);     
    }

    cli.prompt();

})