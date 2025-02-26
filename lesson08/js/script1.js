`use srtrict`

// if (confirm(`Почати тестування?`)) { 
// }

if (confirm(`Почати тестування?`)) {

    function getScore(k) {
        let scores = [];
        let arithmeticMean;


        for (let i = 0; i < k; i++) {
            let generateScores = Math.floor(Math.random() * 12) + 1;
            scores.push(generateScores);
        }

        let sum = 0;


        for (let j = 0; j < scores.length; j++) {
            sum += scores[j];
        }


        arithmeticMean = sum / k;
        let result;


        if (arithmeticMean <= 6) {
            result = "двієчник";
        } else if (arithmeticMean < 10) {
            result = "ударник";
        } else {
            result = "відмінник";
        }


        return { arithmeticMean, result };
    }

    let k = 5;
    let scoreData = getScore(k);


    document.write("Середній бал: " + scoreData.arithmeticMean.toFixed(2) + "<br>");
    document.write("Категорія: " + scoreData.result);
}


