console.log("------------2--------");
function sum(arr) {
    return Array.isArray(arr) ? arr.reduce((acc, item) => acc + sum(item), 0) : arr;
}

console.log(sum([[1, 2, 3], [4, 5], [6]]));