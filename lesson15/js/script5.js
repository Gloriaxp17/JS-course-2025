`use strict`


if (confirm(`Почати тестування?`)) {
    // Поля Масив імен хлопців
    // Масив імен дівчат

    // Методи Метод випадкового вибору імені хлопця
    // Метод випадкового вибору імені дівчини
    // Метод виведення пари для танців
    // Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців


    class DanceDirector {
        constructor(boys, girls) {
            this.boys = boys;
            this.girls = girls;
        }

        randomBoyName() {
            const boyName = Math.floor(Math.random() * this.boys.length);
            return this.boys[boyName];
        }

        randomGirlName() {
            const girlName = Math.floor(Math.random() * this.girls.length);
            return this.girls[girlName];
        }

        getCouple() {
            const couple = [this.randomBoyName(), this.randomGirlName()];
            return couple;
        }

        run() {
            setTimeout(() => {
                const couple = this.getCouple();
                alert(`Пара: ${couple[0]} та ${couple[1]}`);
            }, 5000);
        }
    }

    const boys = ["David", "Stepan", "Nikola"];
    const girls = ["Irina", "Masha", "Zoe"];

    const director = new DanceDirector(boys, girls);
    director.run();
}
