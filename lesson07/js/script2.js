`use strict`
//2

if (confirm(`Почати тестування?`)) {
    function getMonth(monthNumber) {
        switch (monthNumber) {
            case 1: return "Січень";
            case 2: return "Лютий";
            case 3: return "Березень";
            case 4: return "Квітень";
            case 5: return "Травень";
            case 6: return "Червень";
            case 7: return "Липень";
            case 8: return "Серпень";
            case 9: return "Вересень";
            case 10: return "Жовтень";
            case 11: return "Листопад";
            case 12: return "Грудень";
            default: return "Такого місяця не існує";
        }
    }

    console.log(getMonth(5));

    function getMonth(monthNumber) {
        let result;
        switch (monthNumber) {
            case 1: result = "Січень"; break;
            case 2: result = "Лютий"; break;
            case 3: result = "Березень"; break;
            case 4: result = "Квітень"; break;
            case 5: result = "Травень"; break;
            case 6: result = "Червень"; break;
            case 7: result = "Липень"; break;
            case 8: result = "Серпень"; break;
            case 9: result = "Вересень"; break;
            case 10: result = "Жовтень"; break;
            case 11: result = "Листопад"; break;
            case 12: result = "Грудень"; break;
            default: result = "Такого місяця не існує";
        }
        return result;
    }
    getMonth(2)


}
