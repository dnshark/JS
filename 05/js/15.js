console.log("------------15--------");
//Задание 15
//Дана строка вида ​ 'var_text_hello'​. Сделайте из него текст ​ 'varTextHello'​ .

function camelWords(value) {
    return value.split("_").map(item => capitalize(item)).join("");
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

logFunc(["Привет_мама_мыла_раму!!! круть", "зачем_тебе_эта_рама?", "я_её_перевариваю_а_ты?"], camelWords);