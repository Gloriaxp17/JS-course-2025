`use strict`
if (confirm(`Почати тестування?`)) {
    function createTable(rows, cols, message) {
        document.write('<table>');
        for (let i = 0; i < rows; i++) {
            document.write('<tr>');
            for (let j = 0; j < cols; j++) {
                document.write(`<td>${message}</td>`);
            }
            document.write('</tr>');
        }
        document.write('</table>');
    }


    createTable(3, 4, 'Привіт');
}
