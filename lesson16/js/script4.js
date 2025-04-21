`use strict`

if (confirm(`Почати тестування?`)) {
    // Задача 4. Створити клас TBankomat, який моделює роботу банкомата. Клас повинен
    // містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень.
    // Реалізувати методи знаходження максимальної та мінімальної сум, які може видати
    // банкомат, та метод зняття деякої суми.

    class TBankomat {
        constructor() {
            this.banknotes = {
                200: 0,
                100: 0,
                50: 0,
                20: 0,
                10: 0,
                5: 0
            };
        }

        addMoney(denomination, count) {
            try {
                if (denomination <= 0 || count <= 0) {
                    throw new Error("Невірно введено число. Значення мають бути більше за 0.");
                }

                if (!this.banknotes.hasOwnProperty(denomination)) {
                    throw new Error("Такий номінал не підтримується.");
                }

                this.banknotes[denomination] += count;
                console.log(`Додано ${count} купюр номіналом ${denomination}`);
            } catch (error) {
                console.error("Помилка в addMoney:", error.message);
            }
        }

        getTotalMoney() {
            let res = 0;
            for (let key in this.banknotes) {
                res += Number(key) * this.banknotes[key];
            }
            return res;
        }

        getMaxAmount() {
            let max = -Infinity;
            for (let key in this.banknotes) {
                if (this.banknotes[key] > 0 && Number(key) > max) {
                    max = Number(key);
                }
            }
            return max === -Infinity ? 0 : max;
        }

        getMinAmount() {
            let min = Infinity;
            for (let key in this.banknotes) {
                if (this.banknotes[key] > 0 && Number(key) < min) {
                    min = Number(key);
                }
            }
            return min === Infinity ? 0 : min;
        }

        withdraw(amount) {
            try {
                if (amount <= 0) {
                    throw new Error("Сума має бути більшою за 0");
                }

                if (amount > this.getTotalMoney()) {
                    throw new Error("Недостатньо коштів у банкоматі");
                }

                let remaining = amount;
                let result = {};

                const denominations = Object.keys(this.banknotes)
                    .map(Number)
                    .sort((a, b) => b - a);

                for (let denom of denominations) {
                    let countAvailable = this.banknotes[denom];
                    let countToGive = Math.min(Math.floor(remaining / denom), countAvailable);

                    if (countToGive > 0) {
                        result[denom] = countToGive;
                        remaining -= denom * countToGive;
                    }
                }

                if (remaining === 0) {
                    for (let denom in result) {
                        this.banknotes[denom] -= result[denom];
                    }
                    console.log(`Видано:`, result);
                } else {
                    console.log("Неможливо видати суму наявними купюрами");
                }
            } catch (error) {
                console.error("Помилка в withdraw:", error.message);
            }
        }
        toString() {
            return `Стан банкомата:
          Купюр по 200 грн: ${this.banknotes[200]}
          Купюр по 100 грн: ${this.banknotes[100]}
          Купюр по 50 грн: ${this.banknotes[50]}
          Купюр по 20 грн: ${this.banknotes[20]}
          Купюр по 10 грн: ${this.banknotes[10]}
          Купюр по 5 грн: ${this.banknotes[5]}
          Загальна сума: ${this.getTotalMoney()} грн`;
        }
    }
    let bank = new TBankomat();

    bank.addMoney(100, 3);
    bank.addMoney(10, 5);
    bank.addMoney(7, 1);
    bank.addMoney(50, -2);

    console.log("Загальна сума:", bank.getTotalMoney());

    bank.withdraw(250);
    bank.withdraw(-100);
    bank.withdraw(100000);
}

