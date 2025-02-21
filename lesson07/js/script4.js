`use strict`

if (confirm(`Почати тестування?`)) {
    function getMinNumber(number1, number2, number3, number4) {
        let minNum = number1;
        if (number2 < minNum) {
            minNum = number2;
        } if (number3 < minNum) {
            minNum = number3;

        } if (number4 < minNum) {
            minNum = number4
        } return minNum;
    }
    console.log(getMinNumber(26, 43, 156, 4));
    // or
    function getMinNumber(number1, number2, number3, number4) {
        return Math.min(number1, number2, number3, number4);

    }
    console.log(getMinNumber(30, 56, 3, 11));
    //--------------------------------------------------

    function getSum(number1, number2, number3, number4) {
        return (number1 + number2 + number3 + number4);
    }
    getSum(4, 7, 13, 90);


    console.log(getSum(4, 7, 13, 90));
    //--------------------------------------
    function getProduct(number1, number2, number3, number4) {
        return number1 * number2 * number3 * number4;

    }
    //-------------------------------------------------------
    function getArithmeticMean(number1, number2, number3, number4) {
        return (number1 + number2 + number3 + number4) / 4;

    }
}

