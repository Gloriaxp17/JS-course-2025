`use srtrict`

// if (confirm(`Почати тестування?`)) { 
// }

if (confirm(`Почати тестування?`)) {

    function getPlaces(arr) {
        if (arr.length === 0) return [[]];

        let result = [];

        for (let i = 0; i < arr.length; i++) {
            let first = arr[i];
            let rest = arr.slice();
            rest.splice(i, 1);

            let permutations = getPlaces(rest);

            for (let perm of permutations) {
                result.push([first, ...perm]);
            }
        }

        return result;
    }


    console.log(getPlaces(["Alice", "Bob", "Charlie"]));
}

















