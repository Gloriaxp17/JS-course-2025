`use strict`
//6
// Товар1 let firstItemsPrice
// let firstItemsAmount
// ...2
// 3
let firstItemsPrice = parseFloat(prompt("введіть ціну за хліб"));
let firstItemsAmount = Number(prompt("введіть кількість хліба "));
let secondItemsPrice = parseFloat(prompt("Введіть ціну за молоко "));
let secondItemsAmount = Number(prompt("Введіть кількість пачок молока "));
let thirdItemsPrice = parseFloat(prompt("Введіть ціну за сіль"));
let thirdItemsAmount = Number(prompt("Введіть кількість пачок солі "));

let costFirst = firstItemsPrice * firstItemsAmount;
document.write(`Ви придбали: ${firstItemsAmount} хлібин  по ${firstItemsPrice} грн., разом: ${costFirst} <br>`);
let costSecond = secondItemsPrice * secondItemsAmount;
document.write(` ${secondItemsAmount} пачок молока по ${secondItemsPrice} грн., разом: ${costSecond} <br>`);
let costThird = thirdItemsPrice * thirdItemsAmount;
document.write(` ${thirdItemsAmount} пачок солі по ${thirdItemsPrice} грн., разом: ${costThird} <br>`);
let sumOfAll = costFirst + costSecond + costThird;
document.write(` Всього ${sumOfAll} грн.`)