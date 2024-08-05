// const Person = require('./person.js');

// //Employees

// const Saurav = new Person("Saurav", true, false, 40, 200);
// const SomeOne = new Person("SomeOne", true, true, 40, 500);

// //shoppers
// const grahak =  new Person("Grahak", false, false, 0, 400, ['sunglass', 'glass']);
// const grahak2 = new Person("Grahak", false, false, 0, 400, ['kuch', 'kuch2']);

// console.log(Saurav.toString(), SomeOne.toString(), grahak.toString(), grahak2.toString());


/// :::::::::CODE WITH BUILDER()::::::::::

const PersonBuilder = require('./person.js');

//employees

const saurav = new PersonBuilder('Saurav')
                    .makeEmployee(true)
                    .makeManager(false)
                    .addHours(40)
                    .withMoney(400)
                    .build();

const ManagerSomeOne = new PersonBuilder('SomeOne')
                    .makeEmployee(true)
                    .makeManager(true)
                    .addHours(60)
                    .withMoney(777)
                    .build();

// Shoppers 

const grahak = new PersonBuilder('grahak')
                    .withMoney(999)
                    .addList(['sunglass', 'product'])
                    .build();

console.log(saurav.toString());
console.log(ManagerSomeOne.toString());
console.log(grahak.toString());