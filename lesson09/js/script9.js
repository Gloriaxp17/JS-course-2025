`use srtrict`

if (confirm(`Почати тестування?`)) {
    function createArrFromFirstLetters(arr) {
        let result = arr.map(item => item[0])
        return result
    }
    let arr = [`Abba`, `Lori`, `Lena`, `Anna`, `Clara`, `Kolya`, `Andrew`];
    document.write(createArrFromFirstLetters(arr));
}