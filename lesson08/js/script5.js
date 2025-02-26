`use strict`


if (confirm(`Почати тестування?`)) {
    function getScores(arr) {
        let twoCount = 0;
        let goodMarks = 0;
        let belowAverage = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 2) {
                twoCount++;
            }
            if (arr[i] > 9) {
                goodMarks++;
            }
            if (arr[i] < 7) {
                belowAverage++;
            }
        }

        return [twoCount, goodMarks, belowAverage];
    }


    let scores = [2, 10, 8, 7, 2, 12, 6, 5];
    console.log(getScores(scores));

}
