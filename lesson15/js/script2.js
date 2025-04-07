`use strict`
//2

if (confirm(`Почати тестування?`)) {
    // Авто
    // Поля(властивості) Марка
    // Розмір бака
    // Кількість наявних літрів
    // Кількість місць
    // Кількість пасажирів

    // Методи (дії) Заправка на вказану кількість літрів
    // Виведення кількості пасажирів
    // Додавання пасажирів
    // Висадка пасажирів


    let auto = {
        brand: "Nissan",
        tankSize: 50,
        littersAvailable: 20,
        numSits: 5,
        numPassangers: 2,

        refueling(numLitters) {
            if (this.littersAvailable + numLitters > this.tankSize) {
                return "Літраж перевищує вміст бака";
            } else {
                this.littersAvailable += numLitters;
                return `Заправлено. Зараз у баку: ${this.littersAvailable} літрів`;
            }
        },

        showPassengers() {
            console.log(`Кількість пасажирів: ${this.numPassangers}`);
        },

        passengersAdding(numOfPassangers) {
            if (this.numPassangers + numOfPassangers > this.numSits) {
                return "Число перевищує кількість сидінь";
            } else {
                this.numPassangers += numOfPassangers;
                return `Додано. Зараз пасажирів: ${this.numPassangers}`;
            }
        },

        passengersDisembarking(numOfDisembarking) {
            if (this.numPassangers - numOfDisembarking < 0) {
                return "Некоректно введене число";
            } else {
                this.numPassangers -= numOfDisembarking;
                return `Висаджено. Зараз пасажирів: ${this.numPassangers}`;
            }
        }
    };
    console.log(auto.refueling(25));
    console.log(auto.refueling(10));
    console.log(auto.passengersAdding(2));
    console.log(auto.passengersDisembarking(1));
    auto.showPassengers();
}
