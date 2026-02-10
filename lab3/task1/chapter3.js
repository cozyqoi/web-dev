// Task 1: Object property manipulation
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

const user = {
    name: "John"
};

user.name = "Pete";
// user = 123; // Error

// Task 2: Sum object values
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
alert(sum); // 390

// Task 3: Multiply numeric values
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

// Task 4: Method returning 'this'
function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}

let user = makeUser();
alert( user.ref().name );

// Task 5: Method chaining
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep();

// Task 6: Calculator object
let calculator1 = {
    sum() { return this.a + this.b; },
    mul() { return this.a * this.b; },
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator1.read();
alert( calculator1.sum() );
alert( calculator1.mul() );

// Task 7: Constructor returning object
let obj = {};
function A() { return obj; }
function B() { return obj; }
alert( new A() == new B() );

// Task 8: Calculator constructor - CONVERT TO CLASS
class Calculator {
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
    sum() { return this.a + this.b; }
    mul() { return this.a * this.b; }
}

let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// Task 9: Accumulator constructor - CONVERT TO CLASS
class Accumulator {
    constructor(startingValue) {
        this.value = startingValue;
    }
    read() {
        this.value += +prompt('Сколько нужно добавить?', 0);
    }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
