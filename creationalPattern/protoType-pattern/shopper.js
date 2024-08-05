class Shopper {
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

    clone() { 
        let proto = Object.getPrototypeOf(this);
        let person = Object.create(proto);

        person.name = this.name;
        person._list = [...this.list];

        return person;
    }
}


module.exports = Shopper;