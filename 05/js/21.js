console.log("------------21--------");
function isEven(x) {
    return x % 2 === 0
}

function filter(input, func) {
    const result = [];
    input.forEach(item => {
        if (func(item)) {
            result.push(item)
        }
    })
    return result;
}

console.log(filter([1, 2, 3, 4, 5, 6], isEven));
