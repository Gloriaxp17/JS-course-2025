`use strict`
if (confirm(`Почати тестування?`)) {
    function getYearSum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum;
    }
    //2
    function getEvenMonthSum(arr) {
        let sum = 0;
        for (let i = 1; i < arr.length; i += 2) {

            sum += arr[i];
        }
        return sum;
    }
    //3
    function getSecondHalfSum(arr) {
        let sum = 0;
        for (let i = 6; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    //4
    function getFirstHalfSum(arr) {
        let sum = 0;
        for (let i = 0; i < 6; i++) {
            sum += arr[i];
        }
        return sum;
    }
    //5
    function getStartMonthSum(arr) {
        let sum = 0;
        for (let i = 2; i < arr.length; i += 3) {

            sum += arr[i];
        }
        return sum;
    }


    let payments = [100, 200, 150, 130, 170, 250, 300, 280, 220, 210, 190, 160];

    document.write("Сума за друге півріччя: " + getSecondHalfSum(payments) + "<br>");
    console.log(getYearSum(payments));
    console.log(getFirstHalfSum(payments));
}


