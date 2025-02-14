`use strict`
if (confirm(`Почати тестування?`)) {
    let firstRandom = Math.floor(1 + Math.random() * 4);
    let secondRandom = Math.floor(1 + Math.random() * 4);
    let thirdRandom = Math.floor(1 + Math.random() * 4);

    if (firstRandom === secondRandom && secondRandom === thirdRandom) {
        switch (firstRandom) {
            case 1:
                alert(`${firstRandom},${secondRandom},${thirdRandom}Ви виграли 100 грн!`);
                break;
            case 2:
                alert(`${firstRandom},${secondRandom},${thirdRandom}.Ви виграли 200 грн!`);
                break;
            case 3:
                alert(`${firstRandom},${secondRandom},${thirdRandom}.Ви виграли 500 грн!`);
                break;
            case 4:
                alert(`${firstRandom},${secondRandom},${thirdRandom}.Ви виграли 1000 грн!`);
                break;
        }
    } else {
        alert(`${firstRandom},${secondRandom},${thirdRandom}На жаль, ви не виграли. Спробуйте ще раз!`);
    }
}