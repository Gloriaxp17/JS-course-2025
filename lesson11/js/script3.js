`use strict`

if (confirm(`Почати тестування?`)) {
    let ships = [
        [".", ".", ".", ".", "S", "."],
        [".", "S", ".", ".", ".", "."],
        [".", ".", ".", "S", ".", "."],
        [".", ".", ".", ".", ".", "."],
        ["S", ".", ".", ".", ".", "S"],
        [".", ".", ".", ".", ".", "."]
    ];

    function shipsWar(ships) {
        let attempts = 10;
        let shipsLeft = 5;

        while (attempts > 0 && shipsLeft > 0) {
            let rowNum = parseInt(prompt("Введіть номер рядка (0-5):"));
            let colNum = parseInt(prompt("Введіть номер стовпця (0-5):"));

            if (rowNum < 0 || rowNum > 5 || colNum < 0 || colNum > 5) {
                alert("Некоректні координати, спробуйте ще раз.");
                continue;
            }

            if (ships[rowNum][colNum] === "S") {
                alert("Ви влучили!");
                ships[rowNum][colNum] = "X";
                shipsLeft--;
            } else if (ships[rowNum][colNum] === ".") {
                alert("Ви промахнулися!");
                ships[rowNum][colNum] = "O";
            } else {
                alert("Ви вже стріляли сюди, спробуйте інше місце.");
                continue;
            }

            attempts--;
        }

        if (shipsLeft === 0) {
            alert("Ви потопили всі кораблі! Перемога!");
        } else {
            alert("Спроби закінчилися. Поразка.");
        }

        return ships;
    }

    shipsWar(ships);
}