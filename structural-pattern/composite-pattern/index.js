const CatalogItem = require('./catalog-item');
const CatalogGroup = require('./compositeCatalog');

const boots = new CatalogItem("Leather Boots", 799);
const sneakers = new CatalogItem("Kicks", 399);
const shoe_group = new CatalogGroup("All Shoes Group", [boots,sneakers]);

const food_group = new CatalogGroup("All Food Group", [
    new CatalogItem("some Food", 998),
    new CatalogItem("Item Some", 787)
]);

const compositeCatalog = new CatalogGroup("Composite Catalog", [
    boots, shoe_group, food_group
]);

compositeCatalog.print();
console.log(compositeCatalog.total);

console.log(`boots totle : $${boots.total}`);
boots.print();
sneakers.print();


shoe_group.print();
console.log(shoe_group.total);