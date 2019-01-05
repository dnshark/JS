let year = +prompt("введите год рождения");
let currentYear = new Date().getFullYear();
let age = currentYear - year;
alert(`возраст ${age}`);
alert(age < 16 ? `вход воспрещен` : `добро пожаловать`);
