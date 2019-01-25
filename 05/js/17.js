console.log("------------17--------");
function sequence(num = 0, inc = 1) {
    let _num = num - inc;
    let _inc = inc;

    return function generator() {
        return _num += _inc;
    }
}

var generator = sequence(10, 3);
var generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); //13
console.log(generator2()); //7
console.log(generator());  //16
console.log(generator2());// 8

var gen2 = sequence(0, 2);

