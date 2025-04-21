`use strict`
//2

if (confirm(`Почати тестування?`)) {
    // Задача 2. Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися
    // у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси,
    // вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях
    // збільшиться на 100. Курс долара зберігати в окремому полі.

    class TMoney {
        #amountInDollars;
        #usdRate;

        constructor(amountInDollars, usdRate) {
            this.#amountInDollars = amountInDollars;
            this.#usdRate = usdRate;
        }

        get amountInDollars() {
            return this.#amountInDollars;
        }

        get usdRate() {
            return this.#usdRate;
        }

        set usdRate(newRate) {
            if (newRate > 0) {
                this.#usdRate = newRate;
            } else {
                console.log("Курс повинен бути додатнім");
            }
        }

        addMoney(amountInUah) {
            if (amountInUah < 0) {
                console.log("Невірна сума для додавання");
            } else {
                this.#amountInDollars += amountInUah / this.#usdRate;
            }
        }

        takeMoney(amountInUah) {
            if (amountInUah < 0) {
                console.log("Невірна сума для зняття");
                return;
            }

            const dollarsToWithdraw = amountInUah / this.#usdRate;

            if (dollarsToWithdraw > this.#amountInDollars) {
                console.log("Недостатньо коштів");
            } else {
                this.#amountInDollars -= dollarsToWithdraw;
            }
        }

        getAmountInUah() {
            return this.#amountInDollars * this.#usdRate;
        }

        toString() {
            return `Сума: ${this.#amountInDollars.toFixed(2)} USD (${this.getAmountInUah().toFixed(2)} грн), курс: ${this.#usdRate}`;
        }
    }
    const wallet = new TMoney(100, 40);
    wallet.addMoney(800);
    console.log(wallet.toString());
}
