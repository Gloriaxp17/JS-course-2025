`use srtrict`

// if (confirm(`Почати тестування?`)) { 
// }

if (confirm(`Почати тестування?`)) {
    // Задача 1. Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата
    // представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення
    // дати на певну кількість днів, місяців чи років. Введення та виведення дати реалізувати за
    // допомогою методу toString.

    class TDate {
        #day;
        #month;
        #year;

        constructor(day, month, year) {
            this.day = day;
            this.month = month;
            this.year = year;
        }

        get day() {
            return this.#day;
        }

        get month() {
            return this.#month;
        }

        get year() {
            return this.#year;
        }

        set day(value) {
            if (value < 1 || value > 30) {
                console.log("День має бути від 1 до 30");
                return;
            }
            this.#day = value;
        }

        set month(value) {
            if (value < 1 || value > 12) {
                console.log("Місяць має бути від 1 до 12");
                return;
            }
            this.#month = value;
        }

        set year(value) {
            if (value < 1) {
                console.log("Рік має бути більшим за 0");
                return;
            }
            this.#year = value;
        }

        addDays(n) {
            this.#day += n;
            while (this.#day > 30) {
                this.#day -= 30;
                this.#month++;
                if (this.#month > 12) {
                    this.#month = 1;
                    this.#year++;
                }
            }
        }

        addMonths(n) {
            this.#month += n;
            while (this.#month > 12) {
                this.#month -= 12;
                this.#year++;
            }
        }

        addYears(n) {
            if (n > 0) {
                this.#year += n;
            }
        }

        toString() {
            return `${this.#day}.${this.#month}.${this.#year}`;
        }
    }
    const date = new TDate(28, 12, 2024);
    date.addDays(5);
    date.addMonths(14);
    date.addYears(2);
    console.log(date.toString());
}


