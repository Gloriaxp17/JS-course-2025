`use strict`

//Задача 10. Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами.
if (confirm(`Почати тестування?`)) {
    let firstNum = parseInt(prompt("Введіть перше число"));
    let secondNum = parseInt(prompt("Введіть друге число"));
    let sum = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }

    document.write(`Сума всіх непарних чисел: ${sum}`);
}
