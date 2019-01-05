let x = +prompt("Введите первое число");
let y = +prompt("Введите второе число");
let message;
x === y ? message = "числа равны" : message = "максимальное число" + Math.max(x, y);
alert(message);