console.log("------------15(1)--------");
//Задание 15
//Сделайте функцию ​ inArray​, которая определяет, есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.
// Функция должна возвращать ​ true​ или ​ false​. Показать решение.

function haveWord(str, start, search) {
    for (let i = 0; i < search.length; i++) {
        if (str[start + i] !== search[i]) {
            return false
        }
    }
    return true
}

function inArray(str, find) {
    let result = false;
    for (let i = 0; i < str.length; i++) {
        result = result || haveWord(str, i, find)
    }
    return result;
}

console.log(inArray("sdfdsgdfbhnrthsggdfbvsfs", "rth"));
console.log(inArray("привет, как дела,", "дело"));
console.log(inArray("привет, как дела,", "дела"));