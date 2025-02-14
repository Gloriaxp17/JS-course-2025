`use strict`
if (confirm(`Почати тестування?`)) {
    let firstNum = parseInt(prompt("Введіть число,комп'ютер підрахує суму наступних п'яти непарних чисел"));
    let sum = 0;
    let times = 5;


    if (firstNum % 2 === 0) {
        firstNum++;
    }

    while (times > 0) {
        sum += firstNum;
        firstNum += 2;
        times--;
    }

    confirm(`Сума п'яти непарних чисел: ${sum}`);
}