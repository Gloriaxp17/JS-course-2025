`use strict`


//Tasc 3
// Крок 0:
// Вартість одиниці товару let productsCost
// Кількість товару let productsAmount
// Загальна вартість let totalCost
//Відсоток let percent
// Відсоток від загальної вартості  let percentOfProduct
// Крок 1


let productsCost = Number(prompt("введіть вартість товару за одиницю"));
let productsAmount = Number(prompt("введіть кількість товару"));
let totalCost = productsCost * productsAmount;
alert(` Загальна вартість: ${totalCost}`);
let percent = 5;
let percentOfProduct = (totalCost * percent) / 100;
alert(` ПДВ становить: ${percentOfProduct}`);
