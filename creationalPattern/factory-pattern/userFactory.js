const Employee = require('./employee.js');
const Shopper = require('./shopper.js');

const userFactory = (name, list = [], type) => { 
    if(type == 'employee'){
        return new Employee(name, list);
    }
    return new Shopper(name, list);
}

module.exports = userFactory;
