let login = prompt("Ваш логин");
let password = prompt("Ваш пароль");

let access = login === "Ivan" && password === "334455" ||
    login === "alex" && password === "777" ||
login === "petr" && password === "b5678"

let message = access ? "Добро пожаловать" : "Пошел вон";
alert(message);