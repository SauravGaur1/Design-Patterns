class InventoryItem {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    print() {
        console.log(`${this.name} costs ${this.price}`)
    }

}

class GoldenInventoryItem {

    constructor(baseItem) {
        this.name = `Golden ${baseItem.name}`;
        this.price = baseItem.price + 100;
    }

}

class DiamondInventoryItem {
    constructor(baseItem) {
        this.name = `Diamond ${baseItem.name}`;
        this.price = baseItem.price + 1000;
        this.cutGlass = true;
    }

    print() {
        console.log(`You Suerly can't Afford a ${this.name}`);
    }
}

module.exports = {
    InventoryItem,
    GoldenInventoryItem,
    DiamondInventoryItem,
};