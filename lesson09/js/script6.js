`use strict`
if (confirm(`Почати тестування?`)) {
    function getProduct2biggerThanFirstElement(arr) {
        let biggerThanFirstElement = [];


        for (let item of arr) {
            if (item > arr[0]) {
                biggerThanFirstElement.push(item);
            }
        }


        for (let i = 0; i < biggerThanFirstElement.length; i++) {
            biggerThanFirstElement[i] *= 2;
        }

        return biggerThanFirstElement;
    }
    let numbers = [50, 120, 200, 30, 150, 80];
    document.write(getProduct2biggerThanFirstElement(numbers));
}