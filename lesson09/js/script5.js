`use strict`


if (confirm(`Почати тестування?`)) {
    function getProductOfPositivNumbers(arr) {
        let posNumbers = [];


        for (let item of arr) {
            if (item > 0) {
                posNumbers.push(item);
            }
        }

        let product = 1;
        for (let num of posNumbers) {
            product *= num;
        }

        return product;
    }
    let numbers = [-50, 120, 200, 30, 150, 80];
    document.write(getProductOfPositivNumbers(numbers));
}
