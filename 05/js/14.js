console.log("------------14--------");
//Задание 14 Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
// Для этого сделайте вспомогательную функцию ​ ucfirst​, которая будет получать строку,
// делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

function upperWords(value) {
    return value.split(" ").map(item => capitalize(item)).join(" ");
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

logFunc(["Привет, мама мыла раму!!! круть", "зачем тебе эта рама?", "я её перевариваю, а ты?"], upperWords);