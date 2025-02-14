`use strict`

if (confirm(`Почати тестування?`)) {
    confirm("Загадайте число від 1 до 10, комп'ютер намагатиметься вгадати його за три спроби");

    for (let i = 3; i > 0; i--) {
        let num = Math.floor(1 + Math.random() * 10);
        let guessed = confirm(`Чи комп'ютер вгадав число ${num}?`);

        if (guessed) {
            alert("Комп'ютер вгадав число!");
            break;
        }

        if (i === 1) {
            alert("Комп'ютер не зміг вгадати число.");
        }
    }
}