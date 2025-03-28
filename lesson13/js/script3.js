`use strict`

if (confirm(`Почати тестування?`)) {

    function startAdditionTrainer() {
        function generateExample() {
            let num1 = Math.floor(Math.random() * 10);
            let num2 = Math.floor(Math.random() * 10);
            let correctAnswer = num1 + num2;

            let userAnswer = prompt(`Скільки буде ${num1} + ${num2}?`);

            if (parseInt(userAnswer) === correctAnswer) {
                alert("Правильно!");
            } else {
                alert(`Неправильно! Правильна відповідь: ${correctAnswer}`);
            }
        }

        let intervalId = setInterval(generateExample, 10000);
    }

    startAdditionTrainer();
}