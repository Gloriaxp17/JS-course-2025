`use strict`

if (confirm(`Почати тестування?`)) {
    for (let i = 1; i <= 5; i++) {
        document.write(i);
        for (let j = 1; j <= i; j++) {
            document.write(j);
        }
        document.write("<br>");
    }
}