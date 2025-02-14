`use strict`
let num = 1;
if (confirm(`Почати тестування?`)) {
    for (let t = 1; t <= 3; t++) {
        document.write(` <table style="border: 1px solid black; margin: 10px;  display: inline-block;">`);

        for (let row = 1; row <= 3; row++) {
            document.write(`<tr>`);
            for (let col = 1; col <= 3; col++) {
                document.write(`<td style="border: 1px solid black; padding: 5px;">${num++} </td> `);
            }
            document.write(`</tr> `);
        }
    }
    document.write(`</table>`);

}

