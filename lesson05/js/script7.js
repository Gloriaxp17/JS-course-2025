`use strict`
if (confirm(`Почати тестування?`)) {
    let usersNum = parseInt(prompt("Введіть кількість абзаців"));
    for (let i = 1; i <= usersNum; i++) {
        document.write(`<h1>Заголовок${i}</h1>`);
        for (let p = 1; p <= i; p++) {
            document.write(`<p>розділ${i},параграф${p} </p> `);
        }
    }
}