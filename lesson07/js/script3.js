`use strict`

if (confirm(`Почати тестування?`)) {
    function getDayOfWeek(dayOfWeek) {
        switch (dayOfWeek) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                return "Робочий день";
            case 6:
            case 7:
                return "Вихідний день";
            default:
                return "Такого дня тижня не існує";
        }
    }


    console.log(getDayOfWeek(5));
}