`use srtrict`

// if (confirm(`Почати тестування?`)) { 
// }

if (confirm(`Почати тестування?`)) {
    // Створити клас, що дозволяє виконувати такі операції над масивами:
    //  знаходження кількості додатних, кількості від’ємних,
    //  кількість входжень деякого числа (статичні методи)

    class ArrayAnalyzer {
        static countPositive(arr) {
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    count++;
                }
            }
            return count;
        }

        static countNegative(arr) {
            return arr.filter(num => num < 0).length;
        }

        static countOccurrences(arr, num) {
            return arr.filter(numArr => numArr === num).length;
        }
    }
    let numbers = [12, -5, 0, 48, -2, 12];

    console.log(ArrayAnalyzer.countPositive(numbers));
    console.log(ArrayAnalyzer.countNegative(numbers));
    console.log(ArrayAnalyzer.countOccurrences(numbers, 12));
}


