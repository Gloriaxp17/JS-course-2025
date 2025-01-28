`use strict`
// Tasc 4
// сантиметри
// метри
// кілометри
// 4
// Сантиметри let centimetres 
// Метри let metres 
// Кілометри let kilometres 
let centimetres = Number(prompt(" введіть кількість сантиметрів"));
let metres = centimetres / 100;
let kilometres = centimetres / 100000;
alert(`${metres} метрів`);
alert(`${kilometres} кілометрів`);