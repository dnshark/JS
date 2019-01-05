let goods = +prompt("введите количество товара");
let message;

switch (true) {
    case (/\d*[1]$/).test(goods) :
        message = "товар";
        break;
    case (/\d*[2,3,4]$/).test(goods) :
        message = "товара";
        break;
    case (/\d*[0,5,6,7,8,9]$/).test(goods) :
        message = "товаров";
        break;
    default :
        message = null;
}

message ? alert(`У вас на складе ${goods} ${message}`) : alert(`Некоректные данные`);