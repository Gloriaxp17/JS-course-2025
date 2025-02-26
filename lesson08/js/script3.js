`use strict`

if (confirm(`Почати тестування?`)) {
    function getQofIvans(arr) {
        let ivansQ = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "Іван") {
                ivansQ++;
            }
        }

        return ivansQ;
    }


    const namesArray = ["Іван", "Марія", "Іван", "Петро", "Оксана", "Іван"];

    console.log(getQofIvans(namesArray));
}