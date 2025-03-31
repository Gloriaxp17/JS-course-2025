`use strict`
//2

if (confirm(`Почати тестування?`)) {

    function getYear(obj, n) {
        obj.month += n;
        obj.year += Math.floor(obj.month / 12);
        obj.month = obj.month % 12;
        return obj.year;
    }

}
