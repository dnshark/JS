function addArrs(arr1, arr2) {
    return [...arr1, ...arr2]
}

console.log(addArrs(['a', 'b', 'c'], [1, 2, 3]));

function add123(arr1) {
    return [...arr1, 1, 2, 3]
}

console.log(add123(['a', 'b', 'c']));


function _456add(arr1) {
    return [4, 5, 6, ...arr1]
}

console.log(_456add(['a', 'b', 'c']));

function slice123(arr) {
    return arr.slice(0, 3)
}

console.log(slice123([1, 2, 3, 4, 5]));

function slice45(arr) {
    return arr.slice(3)
}

console.log(slice45([1, 2, 3, 4, 5]));

function splice145(arr) {
    arr.splice(1, 2);
    return arr;
}

console.log(splice145([1, 2, 3, 4, 5]));

function splice234(arr) {
    return arr.splice(1, 3);
}

console.log(splice234([1, 2, 3, 4, 5]));

function spliceabc(arr) {
    arr.splice(3, 0, 'a', 'b', 'c')
    return arr;
}

console.log(spliceabc([1, 2, 3, 4, 5]));

function spliceabce(arr) {
    arr.splice(1, 0, 'a', 'b');
    arr.splice(6, 0, 'c');
    arr.splice(8, 0, 'e');
    return arr;
}

console.log(spliceabce([1, 2, 3, 4, 5]));

const obj = {
    js : 'test',
    jq : 'hello',
    css : 'world'
}

function objKeys(obj) {
    return [...Object.keys(obj)];
}

console.log(objKeys(obj));

