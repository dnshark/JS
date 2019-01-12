"use strict";
let x = +prompt("введите координату x", "0");
let y = +prompt("введите координату y", "0");

let functions = [];
functions[0] = (x, y) => y >= 0 && x + y <= 4 && x - y >= -4;
functions[1] = (x, y) => Math.abs(y) <= 1 && Math.abs(x) <= Math.abs(y);
functions[2] = (x, y) => x * x + y * y <= 1 || (x <= 0 && y <= 0 && x + y >= -2);

const show = (f, index) => f(x, y) ? alert(`попал в мишень ${index + 1} `) : alert(`в мишень ${index + 1} промах`);

functions.forEach((f, index) => show(f, index));
