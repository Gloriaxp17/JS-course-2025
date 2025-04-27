`use strict`

if (confirm(`Почати тестування?`)) {
    // Дано два класи MultChecker (клас для перевірки таблиці множення
    //  - рандомно генеруються числа, які треба перемножати), 
    // AddChecker (клас для перевірки додавання -
    //  рандомно генеруються числа у заданому діапазоні, які треба додавати).
    //  Обидва класи надсилають результати тестування об'єкту класу Hystory,
    //  який зберігає історію тестування у масиві у вигляді об'єктів  
    // Приклад.
    // testsList= [
    //    {firstNum:1, secondNum:5,opration:’*’, userAnswer:7, correctAnswer:5},
    //    {firstNum:3, secondNum:4,opration:’+’, userAnswer:7, correctAnswer:7},
    // ]
    // Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля. 
    // Розробити клас TestManager, який використовуючи ці класи за допомогою таймера
    //  періодично генерує якісь N задач (рандомно вибираємо, що опитувати: додавання чи множення)
    //  і проводить опитування. Результати тестування додаються в об’єкт History.  
    // Зробити так, щоб об'єкт такого класу можна було створити тільки один. 
    // Коли зроблено ці N задач вивести усю історію на екран.

    class MultChecker {
        constructor() {
            this.firstNum = Math.floor(Math.random() * 10);
            this.secondNum = Math.floor(Math.random() * 10);
        }
        res() {
            return this.firstNum * this.secondNum;
        }
    }

    class AddChecker {
        constructor() {
            this.firstNum = Math.floor(Math.random() * 10);
            this.secondNum = Math.floor(Math.random() * 10);
        }
        res() {
            return this.firstNum + this.secondNum;
        }
    }

    class History {
        constructor() {
            this.resultList = [];
        }

        add(result) {
            this.resultList.push(result);
        }

        showHistory() {
            for (let item of this.resultList) {
                console.log(`${item.firstNum} ${item.operation} ${item.secondNum} =
                     ${item.correctAnswer}, твоя відповідь: ${item.userAnswer}`);
            }
        }
    }

    class TestManager {
        constructor() {
            this.history = new History();
        }

        generateTask() {
            const taskType = Math.random() < 0.5 ? 'multiply' : 'add';
            let task;

            if (taskType === 'multiply') {
                task = new MultChecker();
                task.operation = '*';
            } else {
                task = new AddChecker();
                task.operation = '+';
            }

            return task;
        }

        checkAnswer(task, userAnswer) {
            const correctAnswer = task.res();
            this.history.add({
                firstNum: task.firstNum,
                secondNum: task.secondNum,
                operation: task.operation,
                userAnswer: userAnswer,
                correctAnswer: correctAnswer
            });
        }


        showHistory() {
            this.history.showHistory();
        }
    }


    const manager = new TestManager();
    for (let i = 0; i < 5; i++) {
        const task = manager.generateTask();
        const userAnswer = task.res();
        manager.checkAnswer(task, userAnswer);
    }
    manager.showHistory();
}

