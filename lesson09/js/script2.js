`use strict`
//2

if (confirm(`Почати тестування?`)) {
    let length = parseInt(prompt("Введіть число"));

    function createArrayWith1and7(length) {
        let array = new Array(length).fill(7);
        let halfLength = Math.floor(length / 2);


        array.fill(1, 0, halfLength);

        return array;
    }

    const result = createArrayWith1and7(length);
    document.write(result);
}
