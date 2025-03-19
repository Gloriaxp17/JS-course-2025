`use strict`

if (confirm(`Почати тестування?`)) {

    function insertionSort(arr) {
        let countCompares = 0;
        let countChanges = 0;

        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;


            while (j >= 0 && arr[j] > key) {
                countCompares++;
                arr[j + 1] = arr[j];
                j--;
                countChanges++;
            }

            arr[j + 1] = key;
            countChanges++;
        }

        return { sortedArray: arr, countCompares, countChanges };
    }


    let arr = [4, 5, 9, 14, 15, 18, 29, 32, 37, 37, 48, 49, 53, 54, 56, 58, 60, 62, 68, 72, 77, 77, 77, 77, 82, 91, 91, 92, 95, 98];
    let result = insertionSort(arr);
    console.log("Відсортований масив:", result.sortedArray);
    console.log("Кількість порівнянь:", result.countCompares);
    console.log("Кількість обмінів:", result.countChanges);
}