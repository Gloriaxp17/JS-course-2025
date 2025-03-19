`use srtrict`

// if (confirm(`Почати тестування?`)) { 
// }

if (confirm(`Почати тестування?`)) {

    function bubbleSortCountSwaps(arr) {
        let n = arr.length;
        let count = 0;
        let compare = 0;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1 - i; j++) {
                compare++;
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    count++;
                }
            }
        }
        return { sortedArray: arr, comparisons: compare, swaps: count };
    }
    let result = bubbleSortCountSwaps([5, 67, 432, 372, 76, 9, 64, 84, 2, 78, 906, 124, 3, 8, 4, 54, 78, 2, 32, 90, 65, 124, 3, 8, 4, 54, 78, 2, 32, 90]);
    console.log(result);
}


