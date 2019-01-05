let day = prompt("введите номер дня недели");

let message;

switch (day) {
    case "1" :
        message = "Понедельник";
        break;
    case "2" :
        message = "Вторник";
        break;
    case "3" :
        message = "Среда";
        break;
    case "4" :
        message = "Четверг";
        break;
    case "5" :
        message = "Пфтница";
        break;
    case "6" :
        message = "Суббота";
        break;
    case "7" :
        message = "Воскресенье";
        break;
    default :
        message = "Неправильный день недели";
}

alert(message);