`use strict`

if (confirm(`Почати тестування?`)) {

    function getAge() {
        const year = parseInt(document.querySelector("input").value)
        const currentYear = 2025;
        const result = currentYear - year;
        document.querySelector("span").innerText = result

    }
    window.onload = function () {
        const button = document.getElementById('btn');
        button.onclick = getAge;
    }


}