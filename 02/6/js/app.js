let flatNumber = +prompt("введите номер квартиры");
let entrance
if (flatNumber <= 1 && flatNumber <=20) {
   entrance = 1;
} else if (
    flatNumber <= 21 && flatNumber <= 48) {
   entrance = 2;
} else if (flatNumber <= 49 && flatNumber <= 90) {
    entrance = 3;
}

let message = entrance ? `ваш подъезд ${entrance}` : `вы живете на крыше`;
alert(message);
