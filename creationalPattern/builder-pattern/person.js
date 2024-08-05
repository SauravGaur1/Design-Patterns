// class Person { 
//     constructor(name, isEmployee, isManager,hours, money, list) {
//         this.name = name;
//         this.isEmployee = isEmployee;
//         this.isManager = isManager;
//         this.hours = hours;
//         this.money = money;
//         this.list = list;
//     }

//     toString() {
//         return JSON.stringify(this);
//     }
// }

// module.exports = Person;

/// :::::::::CODE WITH BUILDER()::::::::::

class Person { 
    constructor(builder) {
        this.name = builder.name;
        this.isEmployee = builder.isEmployee;
        this.isManager = builder.isManager;
        this.hours = builder.hours;
        this.money = builder.money;
        this.list = builder.list;
    }

    toString() {
        return JSON.stringify(this);
    }
}

class PersonBuilder {  

    constructor(name) {
        this.name = name;
    }

    makeEmployee(flag) {
        this.isEmployee = flag;
        return this;
    }

    makeManager(flag) {
        this.isManager = flag;
        return this;
    }

    addHours(hours) {
        this.hours = hours;
        return this;
    }

    withMoney(money) {
        this.money = money;
        return this;
    }

    addList(list) {
        this.list = list;
        return this;
    }

    build() {
        return new Person(this);
    }

}

module.exports = PersonBuilder;