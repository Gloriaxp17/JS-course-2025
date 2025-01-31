`use strict`
//Tasc 1
// Крок 0:
// Ім'я 1 дитини  kidOne
// Ім'я 2 дитини  kidTwo
// Кількість цукерок у 1 дитини
// Кількість цукерок у 2 дитини
// 
// Крок 1:

const kidOne = prompt("введіть ім'я першої дитини ");
const kidTwo = prompt("введіть ім'я другої дитини ");
const candys1 = parseInt(prompt("введіть кількість цукерок у першої дитини "));
const candys2 = parseInt(prompt("введіть кількість цукерок у другої дитини "));

if (candys2 > candys1) {
    document.write(`у дитини ${kidTwo} більше цукерок`);
} else if (candys1 > candys2) {
    document.write(`у дитини ${kidOne} більше цукерок`);
} else {
    document.write('У дітей однакова кількість цукерок');
}

