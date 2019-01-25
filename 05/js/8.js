console.log("------------8--------");
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

const pascal = (length) => {
    const initValue = (arr, indexRow, indexCol) => {
        if (indexRow === 0 || indexCol === 0 || indexCol === arr[indexRow].length - 1) {
            return 1;
        }
        return arr[indexRow - 1][indexCol - 1] + arr[indexRow - 1][indexCol];
    }

    const arr = new Array(length);
    for (let i = 0; i < length; i++) {
        arr[i] = new Array(i + 1);
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = initValue(arr, i, j)
        }
    }
    return arr;
}

console.log(fillArr(10, multi));
console.log(fillArr(10, diagonal));
console.log(pascal(10));

