`use strict`

if (confirm(`Почати тестування?`)) {
    // Поля Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)

    // Кількість правильних відповідей
    // Кількість неправильних відповідей

    // Методи Генерування прикладу (метод випадковим чином визначає друге число, перше

    // число фіксоване)
    // Перевірка правильності вказаної відповіді
    // render - виведення інформації про тестування на екран

    class MultChecker {
        constructor(number) {
            this.number = number;
            this.correctAnswer = 0;
            this.incorrectAnswer = 0;
            this.currentSecondNum = null;
        }

        multiply() {
            this.currentSecondNum = Math.floor(Math.random() * 10);
            console.log(`Скільки буде: ${this.number} × ${this.currentSecondNum} ?`);
        }

        checkAnswer(res) {
            let correct = this.number * this.currentSecondNum;
            if (res === correct) {
                console.log("Правильно!");
                this.correctAnswer++;
            } else {
                console.log(`Неправильно. Правильна відповідь: ${correct}`);
                this.incorrectAnswer++;
            }
        }

        render() {
            console.log(`Правильних відповідей: ${this.correctAnswer}`);
            console.log(`Неправильних відповідей: ${this.incorrectAnswer}`);
        }
    }


    const checker = new MultChecker(7);

    checker.multiply();
    checker.checkAnswer(21);
    checker.render();

}


