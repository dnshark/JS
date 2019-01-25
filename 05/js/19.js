console.log("------------19--------");
function map(fn, array) {
    const copy = array.slice();
    for (let i =0; i<array.length; i++) {
        copy[i] = fn(copy[i]);
    }
    return copy;
}

function square(x) {
    return x * x
}

const arr19 = [1, 2, 3, 4, 5];
console.log(map(square, arr19));
console.log(arr19);