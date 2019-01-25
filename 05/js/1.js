console.log("------------1--------");
function arrayFill(str, num) {
    const res = [];
    res.length = num;
    for (let i = 0; i < num; i++) {
        res[i] = str;
    }
    return res;
}

console.log(arrayFill('x', 5));