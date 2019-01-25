function enter(age) {
    return age > 16 ? "Добро пожаловать" : "Вы ещё молоды";
}

logFunc([5, 16, 18], enter);