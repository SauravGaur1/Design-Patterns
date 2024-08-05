class Employee {
    
    constructor(name, list) {
        this._name = name;
        this._list = !list ? [] : list;
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get list() {
        return this._list;
    }

    addItemtToList(item) {
        this._list.push(item);
    }
    
}


module.exports = Employee;