console.log("1. Задача (Рекурсия) Дано натуральное число n. Выведите все числа от 1 до n.")

function showNumberDecRecursion(n) {
    if (n == 1) {
        console.log(n)
        return;
    }
    showNumberDecRecursion(n - 1)
    console.log(n)
}

showNumberDecRecursion(10);

console.log(`2. Задача (Рекурсия) Даны два целых числа A и В (каждое в отдельной строке).
 Выведите все числа от A до B включительно, в порядке возрастания,
 если A < B, или в порядке убывания в противном случае.
`);

function showFromAtoB(a, b) {
    if (a === b || Math.abs(a - b) < 1) {
        console.log(a);
        return
    }

    if (a < b) {
        console.log(a)
        showFromAtoB(a + 1, b)
    } else {
        console.log(b)
        showFromAtoB(b + 1, a)
    }
}

showFromAtoB(5, 10)

console.log(`3. Задача (Рекурсия) Дано натуральное число N. Вычислите сумму его цифр.
При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).`);

function summRecursion(N, summ = 0) {
    if (N < 10 || isNaN(N)) {
        summ += N;
        console.log(`summ=${summ}`);
        return
    }
    summRecursion(Math.floor(N / 10), summ + (N % 10));
}

summRecursion(12345);

console.log(`4. Задача (Рекурсия) Дано натуральное число N.
Выведите все его цифры по одной, в обратном порядке,
разделяя их пробелами или новыми строками.
При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).
Разрешена только рекурсия и целочисленная арифметика.`);

function numberReverse(N) {
    if (N < 10) {
        console.log(N);
        return;
    }
    console.log(N % 10);
    numberReverse(Math.floor(N / 10));
}
numberReverse(12345);


console.log(`5. Задача (Рекурсия) Дано натуральное число N. Выведите все его цифры по одной,
в обычном порядке, разделяя их пробелами или новыми строками.
При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).
Разрешена только рекурсия и целочисленная арифметика.`);

function numberNotReverse(N) {
    if (N < 10) {
        console.log(N);
        return;
    }
    numberNotReverse(Math.floor(N / 10));
    console.log(N % 10);
}
numberNotReverse(12345);