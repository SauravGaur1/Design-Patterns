class CatalogGroup {

    constructor(name, composite) {
        this.name = name;
        this.composite = composite;
    }

    get total() {
        return this.composite.reduce((total, nextItem) => total + nextItem.total ,0)
    }

    print() {
        console.log(this.name.toString().toUpperCase());
        this.composite.forEach(item => {
            item.print();
        });
    }
}

module.exports = CatalogGroup;