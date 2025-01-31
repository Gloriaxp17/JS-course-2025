`use strict`

//3
//Рандомне число  random
//Введене число  addNumber
//Повторна спроба  addNumberRepeat
// let addNumber = parseInt(prompt("введіть випадкове число "));
// let addNumberRepeat;
// let random = (Math.random() * 5) + 1;

let addNumber = parseInt(prompt("Введіть випадкове число (від 1 до 5)"));
let random = Math.floor(Math.random() * 5) + 1;

if (addNumber === random) {
    document.write("Неймовірно! Ви вгадали!");
} else {
    let addNumberRepeat = parseInt(prompt("Повторна спроба: введіть випадкове число"));
    if (addNumberRepeat === random) {
        document.write("Неймовірно! Ви вгадали!");
    } else {
        document.write(`На жаль, ви не вгадали. Випало число ${random}`);
    }
}