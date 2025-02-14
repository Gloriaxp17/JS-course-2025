`use strict`
if (confirm(`Почати тестування?`)) {
    confirm("Загадайте число від 1 до 10, комп'ютер намагатиметься його вгадати");

    let min = 1;
    let max = 10;
    let count = 0;

    while (true) {
        let number = Math.floor((min + max) / 2);
        let guessed = confirm(`Ваше число ${number}?`);

        count++;

        if (guessed) {
            alert(`Комп'ютер вгадав число за ${count} спроб!`);
            break;
        }

        let bigger = confirm("Ваше число більше?");

        if (bigger) {
            min = number + 1;
        } else {
            max = number - 1;
        }
    }
}



