`use strict`
//Tasc 1
// Крок 0:
// Число один let numberOne
// Число два numberTwo
// Операція додавання let sum
// Операція множення let multiplication
// Операція ділення let division
// Крок 1:

let numberOne = parseInt(prompt("введіть перше число:"), "0");
let numberTwo = parseInt(prompt("введіть друге число:"), "0");
let sum = numberOne + numberTwo; //Операція додавання
let multiplication = numberOne * numberTwo; //Операція множення
let division; //Операція ділення
if (numberTwo !== 0) {
    division = (numberOne / numberTwo).toFixed(2);
} else {
    division = "на нуль ділити не можна ";
}
const resultOne = document.getElementById(`result1`);
resultOne.textContent = sum;
const resultTwo = document.getElementById(`result2`);
resultTwo.textContent = multiplication;
const resultThree = document.getElementById(`result3`);
resultThree.textContent = division;