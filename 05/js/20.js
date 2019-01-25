console.log("------------20--------");
var gen = sequence(1, 1);

function square(x) {
    return x * x
}

function fmap(a, gen) {
    const _a = a;
    const _gen = gen;
    return function (...args) {
        return _a(_gen(...args))
    }
}

var squareGen = fmap(square, gen)

console.log(squareGen());
console.log(squareGen());
console.log(squareGen());
console.log(squareGen());
console.log(squareGen());
console.log(squareGen());
console.log(squareGen());

function add(a, b, c, d) {
    return a + b + c + d
}

var squareAdd = fmap(square, add);

console.log(squareAdd(1, 2, 3, 4));
console.log(squareAdd(5, 6, 0, 1));