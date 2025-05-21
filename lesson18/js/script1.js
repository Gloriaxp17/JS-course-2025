`use srtrict`

// if (confirm(`Почати тестування?`)) { 
// }

if (confirm(`Почати тестування?`)) {


    const result = document.getElementById("result");
    const sumBtn = document.getElementById("add");
    const multBtn = document.getElementById("multiply");
    const subBtn = document.getElementById("subtract");
    const divBtn = document.getElementById("divide");

    function getSum() {
        const first = parseInt(document.getElementById("first").value);
        const second = parseInt(document.getElementById("second").value);
        const sum = first + second;

        result.innerText = sum;
    }
    function getMult() {
        const first = parseInt(document.getElementById("first").value);
        const second = parseInt(document.getElementById("second").value);
        const multiply = first * second;

        result.innerText = multiply;
    }
    function getSub() {
        const first = parseInt(document.getElementById("first").value);
        const second = parseInt(document.getElementById("second").value);
        const subtract = first - second;

        result.innerText = subtract;
    }
    function getDiv() {
        const first = parseInt(document.getElementById("first").value);
        const second = parseInt(document.getElementById("second").value);
        const divide = first / second;

        result.innerText = divide;
    }

    window.onload = function () {
        sumBtn.onclick = getSum;
        divBtn.onclick = getDiv;
        multBtn.onclick = getMult;
        subBtn.onclick = getSub;
    }


}
