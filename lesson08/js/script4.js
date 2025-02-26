`use strict`

if (confirm(`Почати тестування?`)) {
    function getFirstLetterA(arr) {
        let quantityA = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0] === "A") {
                quantityA++;
            }
        }
        return quantityA;
    }
    //2

    function getSameFirstLastLetter(arr) {
        let quantity = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0] === arr[i][arr[i].length - 1]) {
                quantity++;
            }
        }
        return quantity;
    }

    //3
    function getMore5symbols(arr) {
        let quantity = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length > 5) {
                quantity++;
            }
        }
        return quantity;
    }
    const wordsArray = ["AO2390oe", "AnnA", "A4537a", "wow"];

    console.log(getFirstLetterA(wordsArray));
    console.log(getSameFirstLastLetter(wordsArray));
    console.log(getMore5symbols(wordsArray));

}

