"use strict";
let a = +prompt('введите число a', '0');
let b = +prompt('введите число b', '0');

const less = (a, b) => a + b / 8;
const equal = () => 400;
const more = (a, b) => a - b + 1 / b * 2;

const show = (c) => c(a, b);

alert(a === b ? show(equal) : a < b ? show(less) : show(more));