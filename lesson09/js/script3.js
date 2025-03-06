`use strict`

if (confirm(`Почати тестування?`)) {
    let length = parseInt(prompt("Введіть кількість елементів"));

    function fillArray1and7(length) {
        let array = new Array(length).fill(7);


        let countOnes = Math.min(5, length);


        array.splice(0, countOnes, ...new Array(countOnes).fill(1));

        return array;
    }

    const result = fillArray1and7(length);
    document.write(result);
}