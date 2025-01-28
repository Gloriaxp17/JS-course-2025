`use strict`
// 5
// Секунди let seconds
// Години hours 
// Хвилини minutes 
// Залишок секунд remainingSeconds 

let seconds = Number(prompt("введіть кількість секунд"));
let minutes = Math.floor((seconds % 360) / 60);
let hours = Math.floor(seconds / 3600);
let remainingSeconds = seconds % 60;
document.write(`це${hours}годин, ${minutes} хвилин, та${remainingSeconds} секунд`);