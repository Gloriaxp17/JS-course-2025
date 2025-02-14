`use strict`
if (confirm(`Почати тестування?`)) {
    let n = 3, m = 3;
    let count = 0;
    let maxAttempts = 3;
    let shipX = Math.floor(Math.random() * n) + 1;
    let shipY = Math.floor(Math.random() * m) + 1;

    let kX, kY;

    while (count < maxAttempts) {
        kX = parseInt(prompt("Введіть комірку по горизонталі (від 1 до 3)"));
        kY = parseInt(prompt("Введіть комірку по вертикалі (від 1 до 3)"));
        count++;

        if (kX === shipX && kY === shipY) {
            confirm(`Ви вгадали за ${count} спроб(и)!`);
            break;
        } else if (count < maxAttempts) {
            alert("Промах! Спробуйте ще раз.");
        }
    }

    if (count === maxAttempts && (kX !== shipX || kY !== shipY)) {
        alert(`Ви програли! Корабель був у (${shipX}, ${shipY}).`);
    }
}