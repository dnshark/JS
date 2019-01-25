function enter(age) {
    return age > 16 ? "Добро пожаловать" : "Вы ещё молоды";
}

function enterWithValidationUndefined(age) {
    if (age == undefined) {
        return "Введите возраст";
    }
    return enter(age)
}

logFunc([undefined, null, 0, 5, 16, 18], enterWithValidationUndefined);

logFunc([undefined, null, 0, 5, 16, 18], (item) => item || enter(item));