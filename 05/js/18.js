console.log("------------18--------");
function take(gen2, number) {
    const result = [];
    for (let i = 0; i < number; i++) {
        result.push(gen2())
    }
    return result;
}

console.log(take(gen2, 5));