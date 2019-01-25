console.log("------------7--------");
function deviders(num) {
    let result = [];
    for (let i = 2; i<=num; i++) {
        if (num % i == 0) {
            result.push(i)
        }
    }
    return result;
}

logFunc([124,256,500], deviders);