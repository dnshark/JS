function title(value) {
    console.log(value);
}

title(`1. Задание (циклы). Вывести числа от 4 до 400 на экран.`);
for (let i = 4; i <= 400; i++) {
    console.log(i);
}
title(`2. Задание (циклы). Вывести числа в последовательности: 4 7 10 13 с помощью цикла.`)
for (let j = 4; j <= 13; j += 3) {
    console.log(j);
}
title(`3. Задание (циклы). Вывести числа 654 653 652 до нуля.`)
let k = 654;
while (k >= 0) {
    console.log(k);
    k--;
}
;
title(`4. Задание (циклы). Вывести все годы с 1983 до 2017.`)
for (let i = 1983; i <= 2017; i++) {
    console.log(i);
}
title(`5. Задание (циклы). Вывести числа -4 -2 0 2 4 6 ...100.`)
for (let i = -4; i <= 100; i += 2) {
    console.log(i);
}
title(`6. Задание (циклы). С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.`)
for (let i = 1; i <= 9; i++) {
    console.log(`${i}*7=${i * 7}`);
}
title(`7. Задание (циклы). Выведите с помощью цикла коды спецсимволов от 1000 до 2000. Напомню, что спецсимвол получается комбинацией &#число; Например ӆ`)
let unicodeText = "";
for (let i = 1000; i <= 2000; i++) {
    let symbol = `&#${i};`;
    unicodeText += symbol;
    console.log(String.fromCharCode(i));
}
document.getElementById("unicodeText").innerHTML = unicodeText;
title(`8. Задание (циклы). Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).`)
let n = 100;
console.log(n * (n + 1) / 2);
title(`9. Задание (циклы). С помощью цикла вывести произведение чисел от 1 до 50.`)
let result = 1;
for (let i = 2; i <= 50; i++) {
    result *= i;
}
console.log(result);
title(`10. Задание. Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее. Длину массива вводить через prompt.`)

function getNumber(text) {
    let number;
    do {
        number = parseFloat(prompt(text));
        if (isNaN(number)) {
            alert('Неккоректные данные. Введите цифры')
        }
    } while (isNaN(number))
    console.log(`${text} ${number}`)
    return number;
}

let length = getNumber('Введите длину массива');
let arr = [];
let str = 'x';
for (let i = 0; i < length; i++) {
    arr.push(str)
    str += 'x';
}
console.log(arr);
title(`11. Задание. Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее. Длину массива вводить через prompt.`)
length = getNumber('Введите длину массива для задания 11');
result = [];
for (let i = 0; i < arr.length; i++) {
    result.push((i + 1).toString().repeat(i + 1));
}
console.log(result);
title(`12. Задание
Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.`)
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > 10) {
        console.log(`сложили ${i + 1} чисел`);
        break;
    }
}
if (sum <= 10) {
    console.log('сумма всех элементов меньше 10')
}

title(`13. Задание
Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.`)
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
result = new Array(arr.length);
for (let i = 0; i < arr.length; i++) {
    result[arr.length - i] = arr[i];
}
console.log(result);
title(`14. Задание
Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.`)
arr = [1, 123, 345, 465, -2, -5, -6, 0, 345, 10];
console.log(arr);
result = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < 10) {
        result.push(arr[i]);
    }
}
;
console.log(result);
title(`15. Задание
Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.`)
arr = [3, 4, 57, 3, 567, 967, 4, 23, 45, 68, 46, 23, 8];
console.log(arr);
result = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        result.push(arr[i]);
    }
}
console.log(result);
title(`16. Задание
Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [2, 1, 4, 3, 6, 5]`)
arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
result = new Array(arr.length);
for (let i = 0; i < arr.length; i += 2) {
    result[i] = arr[i + 1];
    result[i + 1] = arr[i];
}
console.log(result);
title(`17. Задание
Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [5, 6, 3, 4, 1, 2]`)
arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
result = new Array(arr.length);
for (let i = 0; i < arr.length; i += 2) {
    result[arr.length - i - 1] = arr[i];
    result[arr.length - i] = arr[i + 1];
}
console.log(result);