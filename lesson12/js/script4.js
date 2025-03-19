`use strict`

if (confirm(`Почати тестування?`)) {
    function bubbleSortShowSteps(arr) {
        let n = arr.length; for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    console.log(arr)
                }
            }
        } return arr
    }

    let arr = [5, 67, 432, 372, 87];
    bubbleSortShowSteps(arr);
}

