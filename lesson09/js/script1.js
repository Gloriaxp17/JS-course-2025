`use srtrict`

// if (confirm(`Почати тестування?`)) { 
// }

if (confirm(`Почати тестування?`)) {
    let length = parseInt(prompt("Введіть число - довжину масиву"));


    function createArrayWithZeros(length) {
        const array = new Array(length).fill(0);
        return array;
    }

    const result = createArrayWithZeros(length);
    document.write(result);
}




