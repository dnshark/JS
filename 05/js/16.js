console.log("------------16--------");
//Задание 16
//Дана строка, например, ​ '123456'​. Сделайте из нее ​ '214365'​ .
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
result = new Array(arr.length);
for (let i = 0; i < arr.length; i += 2) {
    result[i] = arr[i + 1];
    result[i + 1] = arr[i];
}
console.log(result);