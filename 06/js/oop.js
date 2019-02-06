class Worker {
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    getSalary() {
        return this.rate * this.days
    }

    get name() {
        return this._name;
    }

    get surname() {
        return this._surname;
    }

    get rate() {
        return this._rate;
    }

    set rate(value) {
        this._rate = value;
    }

    get days() {
        return this._days;
    }

    set days(value) {
        this._days = value;
    }
}

worker = new Worker("Ivan", "Ivanov", 10, 31);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

function capitalize(item) {
    return item[0].toUpperCase() + item.slice(1)
}

class MyString {

    reverse(item) {
        let result = "";
        for (let i = 1; i <= item.length; i++) {
            result +=item[item.length - i];
        }
        return result;
    }

    ucFirst(item) {
        return capitalize(item);
    }

    ucWords(string) {
        return string.split(" ").map(item => capitalize(item)).join(" ");
    }
}

let str = new MyString();
console.log(str.reverse('abcde'));
console.log(str.ucFirst('abcde'));
console.log(str.ucWords('abcde abcde abcde'));

class User {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get surname() {
        return this._surname;
    }

    set surname(value) {
        this._surname = value;
    }

    getFullName() {
        return `${this._name} ${this._surname}`;
    }
}

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this._year = year;
    }

    get year() {
        return new Date().getFullYear() - this._year;
    }

    set year(value) {
        this._year = value;
    }
}

var student = new Student('Иван', 'Иванов', 2016);

console.log(student.name);
console.log(student.surname);
console.log(student.getFullName());
console.log(student.year);