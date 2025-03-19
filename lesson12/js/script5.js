`use strict`


if (confirm(`Почати тестування?`)) {
    function quickSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        let pivot = arr[Math.floor(arr.length / 2)];
        let left = [];
        let middle = [];
        let right = [];

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

    function binarySearch(arr, name) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            let mid = Math.floor((right + left) / 2);

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


    let names = ["Ivan", "Olga", "Maria", "Anna", "Petro"];
    let sortedNames = quickSort(names);
    console.log("Відсортовані імена:", sortedNames);

    let searchName = "Olga";
    let index = binarySearch(sortedNames, searchName);

    if (index !== -1) {
        console.log(`${searchName} знайдено на індексі ${index}`);
    } else {
        console.log(`${searchName} не знайдено`);
    }

}
