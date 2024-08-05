const FS_Proxy = new require('./fs_proxy.js');
const fs = new FS_Proxy((require('fs')));
const path = require('path');

const txtFile = path.join(__dirname, 'Readme.txt');
const mdFile = path.join(__dirname, 'Readme.md');

var result = (err, contents) => {
    if(err) {
        console.log('\x07');
        console.log(err);
        process.exit(0);
    }

    console.log('reading file...');
    console.log(contents);
}

fs.readFile(txtFile, 'utf-8', result);
fs.readFile(mdFile, 'utf-8', result);