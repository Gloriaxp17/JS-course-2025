`use strict`


if (confirm(`Почати тестування?`)) {
    function createRandomNum(min = 1, max = 10) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createTable(rowNum, colNum) {
        const table = document.createElement("table");
        table.border = "1";
        for (let i = 0; i < rowNum; i++) {
            let row = document.createElement("tr");

            for (let j = 0; j < colNum; j++) {
                const column = document.createElement("td");
                column.innerText = createRandomNum();
                row.appendChild(column);
            }

            table.appendChild(row);
        }

        return table;
    }

    document.body.appendChild(createTable(3, 4));

}
