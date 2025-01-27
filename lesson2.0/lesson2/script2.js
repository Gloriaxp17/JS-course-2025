`use strict`
// Tasc 2
// Крок 0:
// Поточний рік let currentYear
// Рік народження let birthYear
// Результат віднімання let usersAge
// Крок 1:
let currentYear = Number(prompt("введіть ,який зараз рік"));
let birthYear = Number(prompt(" введіть рік свого народження"));
let usersAge = currentYear - birthYear;
alert(`вам ${usersAge} років`);