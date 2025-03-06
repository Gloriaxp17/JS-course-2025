`use strict`
if (confirm(`Почати тестування?`)) {
    function makeDiscount30percent(arr) {
        return arr.map(item => item > 1000 ? item * 0.7 : item);
    }
    let numbers = [50, 120, 200, 30, 150, 80];
    document.write(makeDiscount30percent(numbers));
}
