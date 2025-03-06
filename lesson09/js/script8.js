`use srtrict`

if (confirm(`Почати тестування?`)) {
    function createNewArrWithFirstAletter(arr) {
        let result = arr.filter(item => item[0] === "A")
        return result
    }
    let numbers = ["A50", "B120", "C200", "A30", "A150", "U80"];
    document.write(createNewArrWithFirstAletter(numbers));
}

