let experience = +prompt("введите трудовой стаж (лет)");
let expRange = [
    {
        "from": 0,
        "to": 3,
        message: "0%"
    },
    {
        "from": 3,
        "to": 10,
        message: "10%"
    },
    {
        "from": 10,
        "to": 20,
        message: "20%"
    },
    {
        "from": 20,
        "to": Infinity,
        message: "25%"
    }];

let found = false;

for (let i = 0; i < expRange.length; i++) {
    console.log(expRange[i]["from"]);
    if (experience >= expRange[i]["from"] && experience < expRange[i]["to"]) {
        alert(`Ваша надбавка: ${expRange[i]["message"]}`);
        found = true;
        break;
    }
}

if (!found) {
    alert("У вас странный опыт");
}
