`use srtrict`

if (confirm(`Почати тестування?`)) {

    function createArr20percent(arr) {
        let result = arr.map(item => item * 0.2)
        return result
    }
    let numbers = [50, 120, 200, 30, 150, 80];
    document.write(createArr20percent(numbers));
}