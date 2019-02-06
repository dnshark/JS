const TYPE = "TYPE";
const SIZE = "SIZE";
const FILLING = "FILLING";
const ADDITIONAL = "ADDITIONAL";

const PRICE = "price";
const CAL = "cal";
const info = {
    "big": {
        TYPE: SIZE,
        PRICE: 100,
        CAL: 40
    },
    "small": {
        TYPE: SIZE,
        PRICE: 100,
        CAL: 40
    },
    "cheese": {
        TYPE: FILLING,
        PRICE: 10,
        CAL: 20
    },
    "salad": {
        TYPE: FILLING,
        PRICE: 20,
        CAL: 5
    },
    "potato": {
        TYPE: FILLING,
        PRICE: 15,
        CAL: 10
    },
    "spices": {
        TYPE: ADDITIONAL,
        PRICE: 15,
        CAL: 0
    },
    "mayonnaise": {
        TYPE: ADDITIONAL,
        PRICE: 20,
        CAL: 5
    }
}

function validationValue(item, type) {
    if (!item || item[TYPE] !== type) {
        throw new Error(`input ${type} is incorrect`)
    }
    return item
}

function validationArray(items, type) {
    items.forEach(item => validationValue(item, type));
    return items
}

function calcItems(items, type) {
    return items.reduce((acc, item) => acc + item[type.toUpperCase()], 0);
}

class Humburger {

    constructor(size, filling) {
        this._size = validationValue(info[size], SIZE);
        this._filling = validationArray(filling.map(item => info[item]), FILLING);
        this._additional = [];
    }

    set additional(value) {
        let arr = [];
        value.forEach(item => arr.push(info[item]));
        this._additional = validationArray(arr, ADDITIONAL)
    }

    calcPrice() {
        return calcItems([this._size, ...this._filling, ...this._additional], PRICE)
    }

    calcCal() {
        return calcItems([this._size, ...this._filling, ...this._additional], CAL)
    }
}

humburger = new Humburger("big", ["salad", "potato"]);
humburger.additional = ["mayonnaise"];

console.log(`price= ${humburger.calcPrice()}`);
console.log(`cal= ${humburger.calcCal()}`);

