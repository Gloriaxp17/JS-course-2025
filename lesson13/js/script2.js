`use strict`
//2

if (confirm(`Почати тестування?`)) {

    function createIterator(arr) {
        let sortedArr = [...arr].sort((a, b) => a - b);
        let index = 0;

        return function () {
            let value = sortedArr[index];
            index = (index + 1) % sortedArr.length;
            return value;
        };
    }


    const nextNumber = createIterator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

    console.log(nextNumber());
    console.log(nextNumber());
    console.log(nextNumber());
    console.log(nextNumber());
    console.log(nextNumber());
    console.log(nextNumber());
    console.log(nextNumber());
    console.log(nextNumber());
    console.log(nextNumber());
    console.log(nextNumber());
    console.log(nextNumber());
    console.log(nextNumber());
    console.log(nextNumber());
    console.log(nextNumber());
    console.log(nextNumber());



}
