`use strict`
//2

if (confirm(`Почати тестування?`)) {
    for (let i = 1; i <= 5; i++) {
        for (let j = 0; j < i; j++) {
            document.write("o");
        }
        document.write("<br>");
    }


}
