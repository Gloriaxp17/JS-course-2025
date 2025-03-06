`use strict`

if (confirm(`Почати тестування?`)) {
    function showBiggerThan100(arr) {
        let result = [];
        for (let item of arr) {
            if (item > 100) {
                result.push(item);
            }
        }
        return result;
    }
    let numbers = [50, 120, 200, 30, 150, 80];
    document.write(showBiggerThan100(numbers));
}

