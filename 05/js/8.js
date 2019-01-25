function fillArr(length, func) {
    const arr = new Array(length);
    for (let i = 1; i <= length; i++) {
        arr[i - 1] = new Array(length);
        for (let j = 1; j <= length; j++) {
            arr[i - 1][j - 1] = func(i, j, length)
        }
    }
    return arr;
}

const multi = (x, y) => x * y;

const diagonal = (x, y, length) => {
    const t = length - y + 1;
    if (x === y)
        return 1;
    if (x === t)
        return 2;
    if (x < t && x < y)
        return 3;
    if (x > t && x < y)
        return 4;
    if (x > t && x > y)
        return 5;
    if (x < t && x > y)
        return 6;
}

//TODO
const pascal = (x, y, length) => {

}

console.log(fillArr(10, multi));
console.log(fillArr(10, diagonal));

