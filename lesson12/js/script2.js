`use strict`
//2

if (confirm(`Почати тестування?`)) {

    function shakerSort(arr) {
        let countCompares = 0;
        let countChanges = 0;
        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            let swapped = false;


            for (let i = left; i < right; i++) {
                countCompares++;
                if (arr[i] > arr[i + 1]) {
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    countChanges++;
                    swapped = true;
                }
            }
            right--;

            if (!swapped) break;
            swapped = false;


            for (let i = right; i > left; i--) {
                countCompares++;
                if (arr[i] < arr[i - 1]) {
                    let temp = arr[i];
                    arr[i] = arr[i - 1];
                    arr[i - 1] = temp;
                    countChanges++;
                    swapped = true;
                }
            }
            left++;

            if (!swapped) break;
        }

        return { sortedArray: arr, countCompares, countChanges };
    }


    let arr = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
    let result = shakerSort(arr);

    console.log("Відсортований масив:", result.sortedArray);
    console.log("Кількість порівнянь:", result.countCompares);
    console.log("Кількість обмінів:", result.countChanges);



}
