`use strict`
if (confirm(`Почати тестування?`)) {
    function convertCentimetersToInches(centimeters) {
        return centimeters * 0.3937;
    }

    function convertKilogramsToPounds(kilograms) {
        return kilograms * 2.2046;
    }

    function convertKilometersToMiles(kilometers) {
        return kilometers * 0.6214;
    }

    let inches = convertCentimetersToInches(4);
    let pounds = convertKilogramsToPounds(10);
    let miles = convertKilometersToMiles(5);

    console.log(inches);
    console.log(pounds);
    console.log(miles);
}