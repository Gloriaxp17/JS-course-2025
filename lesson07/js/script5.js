`use strict`


if (confirm(`Почати тестування?`)) {
    function multitasking(a, b, c) {
        function getBiggerThan100(a, b, c) {
            let count = 0;
            if (a > 100) count++;
            if (b > 100) count++;
            if (c > 100) count++;
            return count;
        }

        function getNaturalNum(a, b, c) {
            let count = 0;
            if (a >= 1) count++;
            if (b >= 1) count++;
            if (c >= 1) count++;
            return count;
        }

        function getEvenNum(a, b, c) {
            let count = 0;
            if (a % 2 === 0) count++;
            if (b % 2 === 0) count++;
            if (c % 2 === 0) count++;
            return count;
        }


        return {
            biggerThan100: getBiggerThan100(a, b, c),
            naturalNumbers: getNaturalNum(a, b, c),
            evenNumbers: getEvenNum(a, b, c),
        };
    }

    console.log(multitasking(150, 50, 200));

}
