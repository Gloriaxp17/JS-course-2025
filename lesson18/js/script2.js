`use strict`
//2

if (confirm(`Почати тестування?`)) {
    function converter() {
        const grn = parseInt(document.getElementById("grn").value);

        const dollarCourse = 40;
        const euroCourse = 47;
        const dollarResult = document.getElementById('dollar');
        const euroResult = document.getElementById('euro');
        let dollar = grn / dollarCourse;
        let euro = grn / euroCourse;
        dollarResult.value = dollar.toFixed(3);
        euroResult.value = euro.toFixed(3);

    }
    window.onload = function () {
        const button = document.getElementById('btn');
        button.onclick = converter;
    }





}
