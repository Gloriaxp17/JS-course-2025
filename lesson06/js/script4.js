`use strict`

if (confirm(`Почати тестування?`)) {
    let list = "abcde";
    let sequenceTimes = 5;
    let sequence = 0;


    for (let a = 0; a < sequenceTimes; a++) {
        for (let b = 0; b < sequenceTimes; b++) {
            if (a === b) continue;
            for (let c = 0; c < sequenceTimes; c++) {
                if (a === c || b === c) continue;
                for (let d = 0; d < sequenceTimes; d++) {
                    if (a === d || b === d || c === d) continue;
                    for (let e = 0; e < sequenceTimes; e++) {
                        if (a === e || b === e || c === e || d === e) continue;


                        sequence++;
                        document.write(` variant: ${sequence} -`);
                        document.write(list[a] + list[b] + list[c] + list[d] + list[e] + "<br>");

                    }
                }
            }
        }
    }
}

