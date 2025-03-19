`use strict`
if (confirm(`Почати тестування?`)) {



    function quickSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        let pivot = arr[Math.floor(arr.length / 2)];
        let left = [];
        let right = [];
        let middle = [];

        for (let item of arr) {
            if (item < pivot) {
                left.push(item);
            } else if (item > pivot) {
                right.push(item);
            } else {
                middle.push(item);
            }
        }

        return [...quickSort(left), ...middle, ...quickSort(right)];
    }
    //--------------------------------
    function findNameFiveLetters(arr) {
        for (let item of arr) {
            if (item.length === 5) {
                return item;
            }
        }
        return null;
    }
    //---------------------------
    function binarySearch(arr, name) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === name) {
                return mid;
            } else if (arr[mid] < name) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }
    //-----
    let names = ["Ivan", "Olga", "Maria", "Anna", "Petro", "Serge"];
    let sortedNames = quickSort(names);
    console.log("Відсортовані імена:", sortedNames);

    let nameWithFiveLetters = findNameFiveLetters(sortedNames);
    if (nameWithFiveLetters) {
        let index = binarySearch(sortedNames, nameWithFiveLetters);
        console.log(`Ім'я ${nameWithFiveLetters} знайдено на індексі ${index}`);
    } else {
        console.log("Імені з 5 літерами немає");
    }

}